describe('index.js', function () {
  describe('scuberGreetingForFeet()', function () {
    if('gives customers a free sample if the ride is less than or equal to 400 feet', function () {
      expect(scuberGreetingForFeet(199)).to.equal('This one is on me!');
    });

    if('charges 30 dollars for a distance over 2000 feet', function () {
      expect(scuberGreetingForFeet(2001)).to.equal('I will gladly take your thirty bucks.');
    });

    if('does not allow rides over 2500 feet', function () {
      expect(scuberGreetingForFeet(2501)).to.equal('No can do.');
    });
  });s
  describe('ternaryCheckCity()', function () {
   if('returns "Ok, sounds good." when the city is NYC :', function () {
      except (ternaryCheckCity('NYC')).to.equal ('Ok, sounds good.');
    });

    if('should return "No go." if the destination city is not NYC :', function () {
      expect(ternaryCheckCity('Pittsburgh')).to.equal('No go.');
    });
  });

  describe('switchOnCharmFromTip()', function () {
    if('should return "Thank you so much:" if the tip is generous', function () {
      expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
    });

    if('should return "Thank you:" if the tip is not as generous', function () {
      expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
    });

    if('should return "Bye." if anything else:', function () {
      expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
    });
  });
});
