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
    const lodgingCostPP = destination.estimatedLodgingCostPerDay * this.duration;
    const flightCostPP = destination.estimatedFlightCostPerPerson;
    return lodgingCostPP + flightCostPP; 
  }

  getTotalCostTrip(destination) {
    return this.getCostPerPerson(destination) * this.travelers;
  }

  getTotalWithAgentFee(destination) {
    let preFees = this.getTotalCostTrip(destination);
    return parseInt((preFees += preFees * 0.1).toFixed(2));
  }
}

export default Trip;
