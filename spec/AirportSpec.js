'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj('plane',['land']);
  });
  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });
  it('can clear planes for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });
  it('can clear planes for takeoff', function(){
    airport.clearForLanding(plane);
    airport.clearForTakeoff(plane);
    expect(airport.planes()).toEqual([]);
  });
  it('can check for stormy weather', function(){
    expect(airport.isStormy()).toBeFalsy();
  });
  describe('under stormy weather', function(){
    it('does not clear for takeoff', function(){
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function() {airport.clearForTakeoff(plane); }).toThrowError('Takeoff error: Bad Weather');
    });
  });
});
