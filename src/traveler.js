import Trip from './trip';

class Traveler {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.travelerType = data.travelerType;
    this.myTrips = [];
  }

  calcPrevYearSpending(destinationData) {
    return this.myTrips.reduce((total, trip) => {
      let curYear = new Date().getFullYear();
      let tripYear = parseInt(trip.date.split('/')[0]);
      let getDestination = destinationData.filter(destination => destination.id === trip.destinationID);
      console.log(getDestination)
      if (tripYear === curYear - 1) {
        total += trip.getTotalWithAgentFee(getDestination)
      }
      return total;
    }, 0)
  }
}

export default Traveler;
