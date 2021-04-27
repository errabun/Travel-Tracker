import './css/base.scss';
import loadAPIs from './fetch-requests';
import Traveler from './traveler';
import Trip from './trip';
import TripRepo from './trips-repo';
import domUpdates from './dom-updates';

let traveler, allTrips, allDestinations;

const tripCardsGrid = document.querySelector('.cards-wrapper');
const destinationSelect = document.querySelector('.destination-list');
const departDaySelect = document.querySelector('#depart');
const tripDurationSelect = document.querySelector('#duration');
const numTravelersSelect = document.querySelector('#numTravelers');
const estimateTripBtn = document.querySelector('.estimate-trip');
const estimateDOMPointer = document.querySelector('.display-estimates');
const loginBtn = document.querySelector('.login-form-submit');
const userNameInput = document.querySelector('#username-field');
const errorMsgPointer = document.querySelector('.stats-book'); 


estimateTripBtn.addEventListener('click', showEstimate);
loginBtn.addEventListener('click', checkLogin);


function checkLogin() {
  const passwordInput = document.querySelector('#password-field');
  const loginFormWrap = document.querySelector('.login-section');
  const userDashboardWrap = document.querySelector('.user-dashboard');
  const userID = getValidLoginID();
  if (passwordInput.value === 'travel2020' && userID) {
    getUser(userID);
    loginFormWrap.classList.add('hidden');
    userDashboardWrap.classList.remove('hidden');
  } else {
    const loginErrorMsg = document.querySelector('.login-error-msg')
    loginErrorMsg.innerHTML = 'Invalid username/password, please try again!'
  }
}

function getValidLoginID() {
  let userId = userNameInput.value.slice(8);
  if (userId > 0 && userId <= 50 && userNameInput.value.includes('traveler')) {
    return userId;
  } else {
    return false;
  }
}

function getUser(userID) {
  loadAPIs(userID)
    .then(allData => {
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
  domUpdates.getDestinationNames(allDestinations.destinations);
  formatDateCalendar();
}

function formatDateCalendar() {
  let date1 = new Date();
  let minDate = date1.toISOString().substring(0, 10);
  return departDaySelect.setAttribute('min', minDate);
}

function bookTripConfirmation() {
  event.preventDefault();
  domUpdates.displayBookConfirmation(estimateDOMPointer);
  document.querySelector('.yes-book').addEventListener('click', postTrip)
  document.querySelector('.no-book').addEventListener('click', () => estimateDOMPointer.innerHTML = '');
}

function postTrip() {
  event.preventDefault();
  estimateDOMPointer.innerHTML = '';
  fetch("http://localhost:3001/api/v1/trips", {
    method: 'POST',
    body: JSON.stringify({
      "id": allTrips.allTrips.length + 1,
      "userID": traveler.id,
      "destinationID": parseInt(destinationSelect.value),
      "travelers": numTravelersSelect.value,
      "date": formatDatePost(departDaySelect.value),
      "duration": tripDurationSelect.value,
      "status": 'pending',
      "suggestedActivities": []
    }),
    headers: {'Content-Type': 'application/json'}
  })
    .then(response => response.json())
    .then(data => {
      traveler.myTrips.push(new Trip(data.newTrip))
      allTrips.allTrips.push(new Trip(data.newTrip))
      domUpdates.addTripCardToDom(traveler.myTrips, allDestinations, tripCardsGrid)
    })
    .catch(err => estimateDOMPointer.innerHTML = err.message)
}

function formatDatePost(dateInput) {
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
  document.querySelector('.book-trip-btn').addEventListener('click', bookTripConfirmation);
}
