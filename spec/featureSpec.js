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
    plane.takeoff(airport);
    expect(airport.planes()).not.toContain(plane);
  });
});
