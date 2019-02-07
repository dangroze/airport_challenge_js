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
  clearForTakeoff: function(plane) {
    if(this.isStormy()) {
      throw new Error('Takeoff error: Bad Weather');
    }
    this._planes.pop();
  },
  isStormy: function() {
    return false;
  }
};
