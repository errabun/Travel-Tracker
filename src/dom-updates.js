const domUpdates = {

  greetUser(traveler) {
    let element = document.querySelector('.welcome');
    element.innerHTML = `Welcome ${traveler.name}!`
  },

  displayPrevYrSpending(travler) {
    let element = document.querySelector('.previous-year');
    element.innerHTML = 
  }

  // addTripCardToDom(destination, trip, element) {
  //   let cardHtml = `
  //     <article class="destination-card" id=${destination.id}>
  //       <h3 maxlength="40">${destination.destination}</h3>
  //       <p>${trip.date} for ${trip.duration} days</p>
  //       <div class="card-photo-container">
  //         <img src=${destination.image} class="card-photo-preview" alt="${destination.alt}">
  //       </div>
  //     </article>`
  //   element.insertAdjacentHTML("beforeend", element);
  // },
}

export default domUpdates;
