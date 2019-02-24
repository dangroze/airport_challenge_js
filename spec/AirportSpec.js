'use strict';

describe('Airport', function() {
  var airport;
  var plane;
  var weather;
  beforeEach(function() {
    plane = jasmine.createSpy('plane');
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather);
  })
  it('has no planes by default', function() {
    expect(airport.planes()).toEqual([]);
  })
  describe('When sunny', function() {
    beforeEach(function() {
      weather.isStormy.and.returnValue(false);
    })
    it('can clear planes for landing', function() {
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    })
    it('can clear planes for takeoff', function() {
      airport.clearForLanding(plane);
      airport.clearForTakeoff(plane);
      expect(airport.planes()).toEqual([]);
    })
  })
  describe('under stormy weather', function() {
    beforeEach(function() {
      weather.isStormy.and.returnValue(true);
    })
    it('does not clear for landing', function() {
      expect(function() {airport.clearForLanding(plane); }).toThrowError('Landing error: Bad Weather')
    })
    it('does not clear for takeoff', function() {
      expect(function() {airport.clearForTakeoff(plane); }).toThrowError('Takeoff error: Bad Weather')
    })
  })
})