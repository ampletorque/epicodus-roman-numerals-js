describe('romanNumerals', function() {
  it("will return roman numerals for a given fixnum value from 1-3", function() {
    expect(romanizeLessThanFour(3)).to.eql("III");
  });
  it("will return roman numerals for a given fixnum value 4", function() {
    expect(romanizeLessThanFour(4)).to.eql("IV");
  });
  it("will return roman numerals for a given fixnum value 5", function() {
    expect(romanizeLessThanFour(5)).to.eql("V");
  });
  it("will return roman numerals for a given fixnum value from 4-9", function() {
    expect(romanize(9)).to.eql("IX");
  });
  it("will return for 1000", function() {
    expect(romanize(1000)).to.eql("M");
  });
  it("will return for 2000", function() {
    expect(romanize(2000)).to.eql("MM");
  });
});
