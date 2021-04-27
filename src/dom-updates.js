const domUpdates = {

  greetUser(traveler) {
    let element = document.querySelector('.welcome');
    element.innerHTML = `Welcome ${traveler.name}!`
  },

  displayPrevYrSpending(traveler, allDestinations) {
    let element = document.querySelector('.previous-year');
    element.innerHTML = 'You spent $' + traveler.calcPrevYearSpending(allDestinations) + ' last year on trips, what a year!'
  },

  displayCurrentYrSpending(traveler, allDestinations) {
    let element = document.querySelector('.current-year');
    element.innerHTML = 'You\'ve spent $' + traveler.calcCurrentYearSpending(allDestinations) + ' so far this year on trips, keep it going!'
  },

  addTripCardToDom(myTrips, allDestinations, element) {
    element.innerHTML = '';
    return myTrips.map(trip => {
      return allDestinations.destinations.find(destination => {
        if (trip.destinationID === destination.id) {
          let cardHtml = `
              <article class="destination-card" id=${destination.id}>
                <h3>${destination.destination}</h3>
                <p>${trip.date} for ${trip.duration} days</p>
                <p>Number of passengers: ${trip.travelers}</p>
                <p>Trip total w/ 10% agent fee: $${trip.getTotalWithAgentFee(destination)}</p>
                <p>Trip Status: ${trip.status}</p>
                <div class="card-photo-container">
                  <img src=${destination.image} class="card-photo-preview" alt="${destination.alt}" height="300px">
                </div>
              </article>`
          return element.insertAdjacentHTML("afterbegin", cardHtml);
        }
      })
    })
  },

  getDestinationNames(destinations) {
    const destinationSelect = document.querySelector('.destination-list');
    destinationSelect.innerHTML =
    `${destinations.map(destination => {
      return `<option value="${destination.id}">${destination.destination}</option>`
    })}`
  },

  displayEstimateCost(element, costPerPerson, estimatedTotalCost, totalPlusFees) {
    return element.innerHTML = `
      <p class="estimate-per-person">Cost Per Person: ${costPerPerson}</p>
      <p class="estimate-all">Total All Travelers: ${estimatedTotalCost}</p>
      <p class="estimate-fees">Total + Agent Fees: ${totalPlusFees}</p>
      <button class="book-trip-btn">Book this trip!</button>`
  },

  displayBookConfirmation(element) {
    element.innerHTML = `
      <p>Are you sure you want to book this trip?</p>
      <button class="yes-book">Yes, I'm sure!</button>
      <button class="no-book">Not right now</button>`
  },
}

export default domUpdates;
