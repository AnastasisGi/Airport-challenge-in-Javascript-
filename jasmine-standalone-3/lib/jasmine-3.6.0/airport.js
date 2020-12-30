const DEFAULT_CAPACITY = 20;

function Airport(capacity = DEFAULT_CAPACITY,weather = Weather){
  this.capacity=capacity
  this.hanger=[]
  this.weather = new Weather
}

Airport.prototype.dockPlane = function(plane){
  if (this.weather.stormy() === true) {
    throw new Error("Can not land the plane, the weather is bad")
  }

  if (this.hanger.length>=DEFAULT_CAPACITY) {
    throw new Error("Airport is full!")
  }
  this.hanger.push(plane)
  console.log("lalal");
  plane.land();
};


Airport.prototype.departure = function (plane) {
  if (this.weather.stormy()===true) {
    throw new Error("Plane can not depart weather is bad")
  }

  if (this.hanger.length<=0) {
    throw new Error("Can not lanch planes,the airport is empty")
  }

  this.hanger.pop(plane);
  plane.takeoff();
};
