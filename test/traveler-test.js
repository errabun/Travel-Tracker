import { expect } from 'chai';

import Traveler from '../src/traveler';
import Trip from '../src/trip'
import Destination from '../src/destination'
import destinationData from './destination-test-data';
import travelerData from './traveler-test-data';
import tripData from './trips-test-data';

describe('Traveler', function() {
  let traveler, travelerInfo, tripInfo, destinationInfo;

  beforeEach(function() {
    travelerInfo = travelerData[2];

    traveler = new Traveler(travelerInfo);

    tripInfo = new Trip(tripData[2]);

  });

  it('should be a function', function() {
    expect(Traveler).to.be.a('function');
  });

  it('should initialize with an id', function() {
    expect(traveler.id).to.eq(3);
  });

  it('should initialize with a name', function() {
    expect(traveler.name).to.eq('Sibby Dawidowitsch');
  });

  it('should store the traverler\'s type', function() {
    expect(traveler.travelerType).to.eq('shopper');
  });

  it('should start with an empty list of trips', function() {
    expect(traveler.myTrips).to.deep.eq([])
  })

  it('should be able to find trips and add them to list of myTrips', function() {
    traveler.findAllTrips(tripData, destinationData);
    expect(traveler.myTrips).to.deep.eq([{
      "id": 1,
      "destination": "Lima, Peru",
      "estimatedLodgingCostPerDay": 70,
      "estimatedFlightCostPerPerson": 400,
      "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
      "alt": "overview of city buildings with a clear sky"
    }])
  })
});
