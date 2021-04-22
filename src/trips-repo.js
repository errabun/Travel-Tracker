import Trip from './trips.js';

class TripRepo {
  constructor(data) {
    this.trips = data.trips.map(trip => new Trip(trip));
  }
}

export default TripRepo;
