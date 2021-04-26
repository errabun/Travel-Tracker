import Trip from './trip'

class TripRepo {
  constructor(data) {
    this.allTrips = data.trips.map(trip => new Trip(trip))
  }

  findTripsByID(traveler) {
    return this.allTrips.filter(trip => {
      if (traveler.id === trip.userID) {
        return traveler.myTrips.push(trip);
      }
    })
  }
}

export default TripRepo;
