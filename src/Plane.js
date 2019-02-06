'use strict';

function Plane(){}
var airport = new Airport();
Plane.prototype = {
  land: function(){
    airport.clearForLanding(this);
  }
};
