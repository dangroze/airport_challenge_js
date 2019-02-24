'use strict';

function Airport(weather){
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this._planes = [];
}
Airport.prototype = {
  planes: function() {
    return this._planes;
  },
  clearForLanding: function(plane) {
    if(this._weather.isStormy()) {
      throw new Error('Landing error: Bad Weather');
    }
    this._planes.push(plane);
  },
  clearForTakeoff: function(plane) {
    if(this._weather.isStormy()) {
      throw new Error('Takeoff error: Bad Weather');
    }
    this._planes.pop();
  },
  isStormy: function() {
    return false;
  }
};
