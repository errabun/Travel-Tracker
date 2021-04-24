import { expect } from 'chai';

import Traveler from '../src/traveler';
import TripRepo from '../src/trips-repo'
import travelerData from './traveler-test-data';
import tripData from './trips-test-data';

describe('TripRepo', function() {
  let traveler, travelerInfo, tripRepo;

  beforeEach(function() {
    travelerInfo = travelerData.travelers[2];

    traveler = new Traveler(travelerInfo);

    tripRepo = new TripRepo(tripData)
    //
    // tripInfo = tripData[2];
    //
    // trip = new Trip(tripInfo);

  });

  it('should be a function', function() {
    expect(TripRepo).to.be.a('function');
  });

  it('should initialize with a list of all trips', function() {
    expect(tripRepo.allTrips).to.deep.eq([
      {
        "id": 1,
        "userID": 44,
        "destinationID": 49,
        "travelers": 1,
        "date": "2019/09/16",
        "duration": 8,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 2,
        "userID": 35,
        "destinationID": 25,
        "travelers": 5,
        "date": "2020/10/04",
        "duration": 18,
        "status": "pending",
        "suggestedActivities": []
      },
      {
        "id": 3,
        "userID": 3,
        "destinationID": 1,
        "travelers": 4,
        "date": "2020/05/22",
        "duration": 17,
        "status": "pending",
        "suggestedActivities": []
      },
      {
        "id": 4,
        "userID": 43,
        "destinationID": 14,
        "travelers": 2,
        "date": "2020/02/25",
        "duration": 10,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 5,
        "userID": 42,
        "destinationID": 29,
        "travelers": 3,
        "date": "2020/04/30",
        "duration": 18,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 6,
        "userID": 29,
        "destinationID": 35,
        "travelers": 3,
        "date": "2020/06/29",
        "duration": 9,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 7,
        "userID": 3,
        "destinationID": 17,
        "travelers": 5,
        "date": "2020/5/28",
        "duration": 20,
        "status": "approved",
        "suggestedActivities": []
      },
      {
        "id": 8,
        "userID": 36,
        "destinationID": 39,
        "travelers": 6,
        "date": "2021/02/07",
        "duration": 4,
        "status": "approved",
        "suggestedActivities": []
      }
    ])
  });

  it('should find trips by traveler\'s id and update the travelers list of trips', function() {
    tripRepo.findTripsByID(traveler);
    expect(traveler.myTrips).to.deep.eq([
      {
        id: 3,
        userID: 3,
        destinationID: 1,
        travelers: 4,
        date: '2020/05/22',
        duration: 17,
        status: 'pending',
        suggestedActivities: []
      },
      {
        id: 7,
        userID: 3,
        destinationID: 17,
        travelers: 5,
        date: '2020/5/28',
        duration: 20,
        status: 'approved',
        suggestedActivities: []
      }
    ])
  })
});
