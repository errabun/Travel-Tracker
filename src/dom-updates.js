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

  // displayPastTrips(traveler) {
  //   let element = document.querySelector('')
  // }

  addTripCardToDom(myTrips, element, allDestinations) {
    let destinationName = myTrips.map(trip => {
      return allDestinations.destinations.find(destination => {
        if (trip.destinationID === destination.id) {
          return destination.destination;
        }
      })
    })
    let cardHtml = `
      <article class="destination-card" id=${destination.id}>
        <h3>${destinationName}</h3>
        <p>${trip.date} for ${trip.duration} days</p>
        <div class="card-photo-container">
          <img src=${destination.image} class="card-photo-preview" alt="${destination.alt}">
        </div>
      </article>`
  },
}

export default domUpdates;
