const domUpdates = {

  greetUser(traveler) {
    let element = document.querySelector('.welcome');
    element.innerHTML = `Welcome ${traveler.name}!`
  },

  displayPrevYrSpending(traveler, allDestinations) {
    let element = document.querySelector('.previous-year');
    element.innerHTML = 'You spent $' + traveler.calcPrevYearSpending(allDestinations) + ' last year on trips'
  },

  displayCurrentYrSpending(traveler, allDestinations) {
    let element = document.querySelector('.current-year');
    element.innerHTML = 'You spent $' + traveler.calcCurrentYearSpending(allDestinations) + ' this year on trips'
  },

  addTripCardToDom(myTrips, allDestinations, element) {
    // let element;
    // myTrips.filter(trip => {
    //   console.log(trip.status)
    //   if (trip.status === 'pending') {
    //     element = pendingTrips;
    //   } else if (new Date(trip.date) > Date.now() && trip.status === 'approved') {
    //     element = upcomingTrips;
    //   } else {
    //     return element = pastTrips;
    //   }
    // })
    return myTrips.map(trip => {
      return allDestinations.destinations.find(destination => {
        if (trip.destinationID === destination.id) {
          let cardHtml = `
              <article class="destination-card" id=${destination.id}>
                <h3>${destination.destination}</h3>
                <p>${trip.date} for ${trip.duration} days</p>
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

  bookNewTrip(destinations) {
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
      <p class="estimate-fees">Total + Agent Fees: ${totalPlusFees}</p>`
  }
}

export default domUpdates;
