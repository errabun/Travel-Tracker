const loadAPIs = (id) => {

  const getSingleTraveler = fetch(`http://localhost:3001/api/v1/travelers/${id}`)
    .then(response => checkForError(response))
    .then(singleTravelerData => singleTravelerData)

  const getAllTrips = fetch('http://localhost:3001/api/v1/trips')
    .then(response => checkForError(response))
    .then(tripsData => tripsData)

  const getAllDestinations = fetch('http://localhost:3001/api/v1/destinations')
    .then(response => checkForError(response))
    .then(destinationsData => destinationsData)

  return Promise.all([getSingleTraveler, getAllTrips, getAllDestinations])
    .then(data => {
      let allData = {};
      allData.getSingleTraveler = data[0];
      allData.getAllTrips = data[1];
      allData.getAllDestinations = data[2];
      return allData;
    })
    .catch(err => errorMsgPointer.insertAdjacentHTML('afterend', `
      <h1 class="error-msg">Something isn't right, please try again!</h1>
      <p>ERROR: ${err.message}</p>`)
    )
}

function checkForError(response) {
  if (response.ok) {
    return response.json();
  } else {
    errorMsgPointer.insertAdjacentHTML('afterend', `
      <h1 class="error-msg">Something isn't right, please try again!</h1>`)
  }
}
export default loadAPIs;
