'use strict';

describe('Feature test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });
  describe('When sunny', function() {
    beforeEach(function() {
      spyOn(Math, 'random').and.returnValue(0.5);
    })
    it('Planes can be instructed to land at an airport', function(){
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });
    it('Planes can be instructed to take off', function(){
      plane.land(airport);
      plane.takeoff();
      expect(airport.planes()).not.toContain(plane);
    });
  })
  describe('When stormy', function() {
    it('Planes cannot take off', function(){
      spyOn(Math, 'random').and.returnValue(0.5);
      plane.land(airport);
      spyOn(airport._weather, 'isStormy').and.returnValue(true);
      expect(function(){ plane.takeoff();}).toThrowError('Takeoff error: Bad Weather');
      expect(airport.planes()).toContain(plane);
    });
    it('Planes cannot land', function() {
      spyOn(Math, 'random').and.returnValue(0);
      expect(function(){ plane.land(airport);}).toThrowError('Landing error: Bad Weather');
    });
  })
  })
  
