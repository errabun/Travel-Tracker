const fetchData = {

  getAllTravelers() {
    return fetch('http://localhost:3001/api/v1/travelers')
      .then(response => response.json())
  },

  getSingleTraveler(id) {
    return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
      .then(response => response.json())
  },

  getAllTrips() {
    return fetch('http://localhost:3001/api/v1/trips')
      .then(response => response.json())
  },

  getAllDestinations() {
    return fetch('http://localhost:3001/api/v1/destinations')
      .then(response => response.json())
  },

  addNewTrip(trip) {
    return fetch('http://localhost:3001/api/v1/trips', {
      method: 'POST',
      body: JSON.stringify(trip),
      headers: { 'Content-type': 'application/json' }
    })
    .then(response => response.json())
  },

  addNewDestination(destination) {
    return fetch('http://localhost:3001/api/v1/destinations', {
      method: 'POST',
      body: JSON.stringify(destination),
      headers: { 'Content-type': 'application/json' }
    })
    .then(response => response.json())
  },

  modifySingleTrip(id, status)
}
