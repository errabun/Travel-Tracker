import { expect } from 'chai';

import Traveler from '../src/traveler';
import Trip from '../src/trip'
import Destination from '../src/destination'
import destinationData from './destination-test-data';
import travelerData from './traveler-test-data';
import tripData from './trips-test-data';

describe('Trips', function() {
  let traveler, travelerInfo, tripInfo, trip, destination, destinationInfo;

  beforeEach(function() {
    travelerInfo = travelerData[2];

    traveler = new Traveler(travelerInfo);

    tripInfo = tripData[2];

    trip = new Trip(tripInfo);

    destinationInfo = destinationData[0];

    destination = new Destination(destinationInfo);

  });

  it('should be a function', function() {
    expect(Trip).to.be.a('function');
  });

  it('should initialize with an trip id', function() {
    expect(trip.id).to.eq(3);
  });

  it('should initialize with an userID', function() {
    expect(trip.userID).to.eq(3);
  });

  it('should store the traverler\'s type', function() {
    expect(trip.destinationID).to.eq(1);
  });

  it('should start with an empty list of trips', function() {
    expect(trip.travelers).to.deep.eq(4)
  })

  it('should be able to return the cost per person ', function() {
    expect(trip.getCostPerPerson(destination)).to.deep.eq(1590)
  })
});
