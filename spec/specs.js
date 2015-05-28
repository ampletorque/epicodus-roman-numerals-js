describe('romanNumerals', function() {
  it("will return for 3", function() {
    expect(romanize(3)).to.eql("III");
  });
  it("will return for 4", function() {
    expect(romanize(4)).to.eql("IV");
  });
  it("will return for 5", function() {
    expect(romanize(5)).to.eql("V");
  });
  it("will return for 9", function() {
    expect(romanize(9)).to.eql("IX");
  });
  it("will return for 10", function() {
    expect(romanize(10)).to.eql("X");
  });
  it("will return for 11", function() {
    expect(romanize(11)).to.eql("XI");
  });
  it("will return for 1014", function() {
    expect(romanize(1014)).to.eql("MXIV");
  });
  it("will return for 415", function() {
    expect(romanize(415)).to.eql("CDXV");
  });
  it("will return for 1016", function() {
    expect(romanize(1016)).to.eql("MXVI");
  });
  it("will return for 100", function() {
    expect(romanize(100)).to.eql("C");
  });
  it("will return for 101", function() {
    expect(romanize(101)).to.eql("CI");
  });
  it("will return for 109", function() {
    expect(romanize(109)).to.eql("CIX");
  });
  it("will return for 110", function() {
    expect(romanize(110)).to.eql("CX");
  });
  it("will return for 116", function() {
    expect(romanize(116)).to.eql("CXVI");
  });
  it("will return for 117", function() {
    expect(romanize(117)).to.eql("CXVII");
  });
  it("will return for 216", function() {
    expect(romanize(216)).to.eql("CCXVI");
  });
  it("will return for 316", function() {
    expect(romanize(316)).to.eql("CCCXVI");
  });
  it("will return for 16", function() {
    expect(romanize(16)).to.eql("XVI");
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

  it("will return for 1514", function() {
    expect(romanize(1514)).to.eql("MDXIV");
  });

  it("will return for 1513", function() {
    expect(romanize(1513)).to.eql("MDXIII");
  });


});
