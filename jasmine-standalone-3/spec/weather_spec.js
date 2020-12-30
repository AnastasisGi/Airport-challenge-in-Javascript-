describe('Weather-report',function(){
    beforeEach(function(){
      weather=new Weather()
    });

    it('can show the weather', function () {
      spyOn(Math,'random').and.returnValue(0.9)
      expect(weather.stormy()).toBe(true)
    });
})
