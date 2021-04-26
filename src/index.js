import './css/base.scss';
import loadAPIs from './fetch-requests';
import Destinations from './destination';
import Traveler from './traveler';
import Trip from './trip';
import TripRepo from './trips-repo';
import domUpdates from './dom-updates';
import datepicker from 'js-datepicker';

let traveler, allTravelers, allTrips, allDestinations;
let userID = 2;

const tripCardsGrid = document.querySelector('.cards-wrapper');
const tripCardsSection = document.querySelector('.trip-cards');
const departDay = document.querySelector('.start-date');
const destinationSelect = document.querySelector('.destination-list');
const departDaySelect = document.querySelector('#depart');
const tripDurationSelect = document.querySelector('#duration');
const numTravelersSelect = document.querySelector('#numTravelers');
const bookTripBtn = document.querySelector('.book-trip-btn');
const estimateTripBtn = document.querySelector('.estimate-trip');
const estimateDOMPointer = document.querySelector('.display-estimates');
const errorMsgPointer = document.querySelector('.user-dashboard');
const loginBtn = document.querySelector('.login-form-submit');
const userNameInput = document.querySelector('#username-field');


// window.addEventListener('load', onStart);
bookTripBtn.addEventListener('click', postTrip);
estimateTripBtn.addEventListener('click', showEstimate);
loginBtn.addEventListener('click', checkLogin);

function checkLogin() {
  event.preventDefault();
  const passwordInput = document.querySelector('#password-field');
  const loginFormWrap = document.querySelector('.login-section');
  const userDashboardWrap = document.querySelector('.user-dashboard');
  if (passwordInput.value === 'travel2020' && userNameInput.value.includes('traveler') && checkLoginIdValidity()) {
    onStart(checkLoginIdValidity());
    loginFormWrap.classList.add('hidden');
    userDashboardWrap.classList.remove('hidden');
  } else {
    const loginErrorMsg = document.querySelector('.login-error-msg')
    loginErrorMsg.innerHTML = 'Invalid username/password, please try again!'
  }
}

function checkLoginIdValidity() {
  let userId = userNameInput.value.slice(8);
  if (userId > 0 && userId <= 50) {
    return userId;
  } else {
    return false;
  }
}

function onStart(userID) {
  loadAPIs(userID)
  .then(allData => {
    allTravelers = allData.getAllTravelers;
    traveler = new Traveler(allData.getSingleTraveler);
    allTrips = new TripRepo(allData.getAllTrips);
    allDestinations = allData.getAllDestinations;
    allTrips.findTripsByID(traveler);
    displayStartDOM();
  })
}

function displayStartDOM () {
  domUpdates.greetUser(traveler);
  domUpdates.displayPrevYrSpending(traveler, allDestinations.destinations);
  domUpdates.displayCurrentYrSpending(traveler, allDestinations.destinations)
  domUpdates.addTripCardToDom(traveler.myTrips, allDestinations, tripCardsGrid)
  domUpdates.bookNewTrip(allDestinations.destinations);
}

function postTrip() {
  event.preventDefault();
  if ( new Date(departDaySelect.value) > Date.now() ) {
    let newTrip = fetch("http://localhost:3001/api/v1/trips", {
      method: 'POST',
      body: JSON.stringify({
        "id": allTrips.allTrips.length + 1,
        "userID": traveler.id,
        "destinationID": parseInt(destinationSelect.value),
        "travelers": numTravelersSelect.value,
        "date": formatDate(departDaySelect.value),
        "duration": tripDurationSelect.value,
        "status": 'pending',
        "suggestedActivities": []
      }),
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(data => {
      console.log("DATA >>>> ", data)
      traveler.myTrips.push(new Trip(data.newTrip))
      domUpdates.addTripCardToDom(traveler.myTrips, allDestinations, tripCardsGrid)
    })
    .catch(err => estimateDOMPointer.innerHTML = err.message)
  } else {
    estimateDOMPointer.innerHTML = "Please select a date in the future";
  }
}

function formatDate(dateInput) {
  const dateParts = dateInput.split('-')
  return dateParts.join('/')
}

function showEstimate() {
  event.preventDefault();
  estimateDOMPointer.innerHTML = '';
  const getDestination = allDestinations.destinations.find(destination => destination.id === parseInt(destinationSelect.value));
  const costPerPerson = (getDestination.estimatedLodgingCostPerDay * tripDurationSelect.value) + getDestination.estimatedFlightCostPerPerson;
  const estimatedTotalCost = costPerPerson * numTravelersSelect.value;
  const totalPlusFees = parseInt(estimatedTotalCost * 1.1).toFixed(2);
  domUpdates.displayEstimateCost(estimateDOMPointer, costPerPerson, estimatedTotalCost, totalPlusFees);
}
