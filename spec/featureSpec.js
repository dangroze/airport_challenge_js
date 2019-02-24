'use strict';

describe('Feature test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('Planes can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
  it('Planes can be instructed to take off', function(){
    plane.land(airport);
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });
  it('Planes cannot take off when stormy weather', function(){
    plane.land(airport);
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){ plane.takeoff();}).toThrowError('Takeoff error: Bad Weather');
    expect(airport.planes()).toContain(plane);
  });
  it('Planes cannot land when stormy weather', function() {
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){ plane.land(airport);}).toThrowError('Landing error: Bad Weather');
  });
})
