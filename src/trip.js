class Trip {
  constructor({ id, userID, destinationID, travelers, date, duration, status, suggestedActivities }) {
    this.id = id;
    this.userID = userID;
    this.destinationID = destinationID;
    this.travelers = travelers;
    this.date = date;
    this.duration = duration;
    this.status = status;
    this.suggestedActivities = suggestedActivities;
  }

  getDestinationID() {
    return this.destinationID;
  }

  getUserID() {
    return this.userID;
  }

  getCostPerPerson(destination) {
    return (destination.estimatedLodgingCostPerDay * this.duration) + destination.estimatedFlightCostPerPerson;
  }
}

export default Trip;
