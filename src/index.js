import './css/base.scss';
import loadAPIs from './fetch-requests';
import Destinations from './destination';
import Traveler from './traveler';
import Trip from './trip';
import TripRepo from './trips-repo'; 

let traveler, allTravelers, trips, destinations;


window.addEventListener('load', onStart)

function getAllData(id) {
  return Promise.all([
    fetchData.getAllTravelers(),
    fetchData.getSingleTraveler(id),
    fetchData.getAllTrips(),
    fetchData.getAllDestinations(),
  ])
}

function on
