const loadAPIs = (id) => {

  const getAllTravelers = fetch('http://localhost:3001/api/v1/travelers')
    .then(response => response.json())
    .then(travelersData => {
      console.log('travelers: ', travelersData)
      return travelersData;
    })

  const getSingleTraveler = fetch(`http://localhost:3001/api/v1/travelers/${id}`)
    .then(response => response.json())
    .then(singleTravelerData => {
      console.log('singleTraveler: ', singleTravelerData)
      return singleTravelerData
    })

  const getAllTrips = fetch('http://localhost:3001/api/v1/trips')
    .then(response => response.json())
    .then(tripsData => {
      console.log('trips: ', tripsData)
      return tripsData;
    })

  const getAllDestinations = fetch('http://localhost:3001/api/v1/destinations')
    .then(response => response.json())
    .then(destinationsData => {
      console.log('destinations: ', destinationsData)
      return destinationsData;
    })

  return Promise.all([getAllTravelers, getSingleTraveler, getAllTrips, getAllDestinations])
    .then(data => {
      let allData = {};
      allData.getAllTravelers = data[0];
      allData.getSingleTraveler = data[1];
      allData.getAllTrips = data[2];
      allData.getAllDestinations = data[3];
      return allData;
    })
    .catch(err => console.log('it broke...', err.message))
}
export default loadAPIs; 
