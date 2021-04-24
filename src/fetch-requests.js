export const loadAPIs = () {

  const getAllTravelers = fetch('http://localhost:3001/api/v1/travelers')
    .then(response => checkForError(response))
    .then(travelerData => {
      console.log('travelers: ', travelerData)
      return travelerData;
    })

  const getAllTrips = fetch('http://localhost:3001/api/v1/trips')
      .then(response => checkForError(response))
      .then(tripsData => {
        console.log('trips: ', tripsData)
        return tripsData;
      })

  const getAllDestinations = fetch('http://localhost:3001/api/v1/destinations')
    .then(response => checkForError(response))
    .then(destinationsData => {
      console.log('destinations: ', destinationsData)
      return destinationsData;
    })

  return Promise.all([getAllTravelers, getAllTrips, getAllDestinations])
    .then(data => {
      let allData = {};
      allData.getAllTravelers = data[0];
      allData.getAllTrips = data[1];
      allData.getAllDestinations = data[2];
      return allData;
    })
    .catch(err => console.log('it broke...', err.message))
},





// const fetchData = {
//
//   checkForError(response) {
//     if (!response.ok) {
//       throw new Error('Something is not right, please try again!')
//     } else {
//       return response.json();
//     }
//   }
//
//   getAllTravelers() {
//     return fetch('http://localhost:3001/api/v1/travelers')
//       .then(response => checkForError(response))
//       .catch(err => console.log('GET travelers error: ', err.message))
//   },
//
//   getSingleTraveler(id) {
//     return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
//       .then(response => checkForError(response))
//       .catch(err => console.log('GET traveler error: ', err.message))
//   },
//
//   getAllTrips() {
//     return fetch('http://localhost:3001/api/v1/trips')
//       .then(response => checkForError(response))
//       .catch(err => console.log('GET trips error: ', err.message))
//   },
//
//   getAllDestinations() {
//     return fetch('http://localhost:3001/api/v1/destinations')
//       .then(response => checkForError(response))
//       .catch(err => console.log('Destination GET error: ', err.message))
//   },
//
//   addNewTrip(trip) {
//     return fetch('http://localhost:3001/api/v1/trips', {
//       method: 'POST',
//       body: JSON.stringify(trip),
//       headers: { 'Content-type': 'application/json' }
//     })
//     .then(response => checkForError(response))
//     .catch(err => console.log('Add Trip POST error: ', err.message))
//   },
//
//   addNewDestination(destination) {
//     return fetch('http://localhost:3001/api/v1/destinations', {
//       method: 'POST',
//       body: JSON.stringify(destination),
//       headers: { 'Content-type': 'application/json' }
//     })
//     .then(response => checkForError(response))
//     .catch(err => console.log('Destination POST error: ', err.message))
//   },
// }
//
// export default fetchData;
