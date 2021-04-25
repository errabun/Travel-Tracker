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
    
    return myTrips.map(trip => {
      return allDestinations.destinations.find(destination => {
        if (trip.destinationID === destination.id) {
          let cardHtml = `
              <article class="destination-card" id=${destination.id}>
                <h3>${destination.destination}</h3>
                <p>${trip.date} for ${trip.duration} days</p>
                <div class="card-photo-container">
                  <img src=${destination.image} class="card-photo-preview" alt="${destination.alt}" height="300px">
                </div>
              </article>`
          return element.insertAdjacentHTML("afterend", cardHtml);
        }
      })
    })
  },
}

export default domUpdates;
