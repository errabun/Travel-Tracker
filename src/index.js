import './css/base.scss';
import loadAPIs from './fetch-requests';
import Destinations from './destination';
import Traveler from './traveler';
import Trip from './trip';
import TripRepo from './trips-repo';
import domUpdates from './dom-updates';
import datepicker from 'js-datepicker';

let traveler, allTrips, allDestinations;


window.addEventListener('load', onStart)

const pastTrips = document.querySelector('.past-title')
const departDay = document.querySelector('.start-date')
const returnDay = document.querySelector('.end-date')

function onStart() {
  loadAPIs(2)
  .then(allData => {
    traveler = new Traveler(allData.getSingleTraveler);
    allTrips = new TripRepo(allData.getAllTrips);
    allDestinations = allData.getAllDestinations;
    allTrips.findTripsByID(traveler);
    domUpdates.greetUser(traveler);
    domUpdates.displayPrevYrSpending(traveler, allDestinations.destinations);
    domUpdates.displayCurrentYrSpending(traveler, allDestinations.destinations)
    domUpdates.addTripCardToDom(traveler.myTrips, pastTrips, allDestinations)
  })
}

function showDestinationOptions(destinations) {
  
}
