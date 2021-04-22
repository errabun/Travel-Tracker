class Traveler {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.travelerType = data.travelerType;
    this.myTrips = [];
  }

  findAllTrips(tripData, destinationData) {
    const findTrips = tripData.filter(trip => trip.userID === this.id);
    const findDestination = destinationData.find(trips => trips.id === findTrips[0].destinationID)
    return this.myTrips.push(findDestination);
  }
}

export default Traveler;
