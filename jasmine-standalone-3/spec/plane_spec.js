describe('The plane', function(){

  let plane;

  beforeEach(function(){
    plane = new Plane()
  });

  describe('Default ', function(){
    it('plane is always landed', function () {
      expect(plane.inTheAir).toBe(false)
    });
  })

  describe('Change status during taking off and landing ',function(){
    it('it starts flying when taking off ', function () {
      plane.takeoff();
      expect(plane.inTheAir).toBe(true)
    });

    it('it stops flying when landing ', function () {
      plane.takeoff();
      plane.land();
      expect(plane.inTheAir).toBe(false)
    });
  });

    describe('It can throw errors', function(){

      it('While it is in the air and asked to takeoff', function () {
        plane.takeoff();
        expect(function(){ plane.takeoff() }).toThrowError ("Plane is already flying")
      });

      it('While it is landed and asked to land', function () {
        expect(function(){ plane.land() }).toThrowError ("Plane is already landed")
      });

    })

})
