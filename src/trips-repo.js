class TripRepo {
  constructor(data) {
    this.allTrips = data;
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
