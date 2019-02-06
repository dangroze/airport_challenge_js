'use strict';

function Airport(){
  this._planes = [];
}
Airport.prototype = {
  planes: function() {
    return this._planes;
  },
  clearForLanding: function(plane) {
    this._planes.push(plane);
  },
  clearForTakeOff: function(plane) {
    this._planes.pop();
  }
};
