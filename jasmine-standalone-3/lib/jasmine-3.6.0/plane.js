function Plane (){
  this.inTheAir = false;
};

Plane.prototype.takeoff = function(){
  if (this.inTheAir) {
    throw new Error("Plane is already flying")
  }
  this.inTheAir = true;
};


Plane.prototype.land = function(){
  if (this.inTheAir===false) {
    throw new Error("Plane is already landed")
  }
  this.inTheAir = false;
};
