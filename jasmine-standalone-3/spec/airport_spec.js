describe('An airport', function (){
  let airport;
  let plane;


  beforeEach(function() {
    weather = function(){}
    airport = new Airport(DEFAULT_CAPACITY, weather);
    plane = new Plane();
  });

  describe('When created', function(){
    it('Has the default capacity', function () {
      expect(airport.capacity).toEqual(DEFAULT_CAPACITY)
    });
    it('It is empty', function () {
      expect(airport.hanger.length).toEqual(0)
    });
  })

  describe('When docking a plane',function(){
      it('instructs a plane to land', function () {
        spyOn(airport.weather, 'stormy').and.returnValue(false);
        spyOn(plane,'land')
        plane.takeoff();
        airport.dockPlane(plane);
        expect(plane.land).toHaveBeenCalled();
      });

      it('is added in the hanger', function () {
        spyOn(airport.weather, 'stormy').and.returnValue(false);
        plane.takeoff();
        airport.dockPlane(plane);
        expect(airport.hanger.length).toEqual(1)
      });

      it('Changes the plane status from air to land', function () {
        spyOn(airport.weather, 'stormy').and.returnValue(false);
        plane.takeoff();
        airport.dockPlane(plane);
        expect(plane.inTheAir).toBe(false)
      });

      it('Does not allow a plane to land if the weather is stormy', function () {
        spyOn(airport.weather, 'stormy').and.returnValue(true);
        plane.inTheAir=true;
        expect( function(){ airport.dockPlane(plane) }).toThrowError("Can not land the plane, the weather is bad")
      });


      it('does not allow plane to land if full', function() {
        plane.takeoff();
        spyOn(airport.weather, 'stormy').and.returnValue(false);

        for (var i=1; i <= DEFAULT_CAPACITY; i++) {
          airport.dockPlane(plane);
            plane.inTheAir = true;};
          expect(function() { airport.dockPlane(plane) }).toThrowError("Airport is full!");
      });
  });

  describe('When a plane is taking off ', function () {
    it('instructs a plane to depart', function () {
      spyOn(airport.weather,'stormy').and.returnValue(false)
      spyOn(plane,'takeoff');
      plane.inTheAir=true;
      airport.dockPlane(plane);
      airport.departure(plane);
      expect(plane.takeoff).toHaveBeenCalled();
    });

    it('it is off the hanger', function () {
      spyOn(airport.weather,'stormy').and.returnValue(false)
      plane.inTheAir=true;
      airport.dockPlane(plane);
      airport.departure(plane);
      expect(airport.hanger.length).toEqual(0);
    });
  });
});
