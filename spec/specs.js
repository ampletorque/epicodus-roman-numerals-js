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
  it("will return for 1900", function() {
    expect(romanize(1900)).to.eql("MCM");
  });
  it("will return for 2000", function() {
    expect(romanize(2000)).to.eql("MM");
  });
  it("will return for 1500", function() {
    expect(romanize(1500)).to.eql("MD");
  });
  it("will return for 2500", function() {
    expect(romanize(2500)).to.eql("MMD");
  });
  it("will return for 1800", function() {
    expect(romanize(1800)).to.eql("MDCCC");
  });
  it("will return for 1300", function() {
    expect(romanize(1300)).to.eql("MCCC");
  });
  it("will return for 1400", function() {
    expect(romanize(1400)).to.eql("MCD");
  });
  it("will return for 2300", function() {
    expect(romanize(2300)).to.eql("MMCCC");
  });
  it("will return for 900", function() {
    expect(romanize(900)).to.eql("CM");
  });
it("will return for 2900", function() {
  expect(romanize(2900)).to.eql("MMCM");
});


});
