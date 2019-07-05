const paliendromCheck = require("../lib/paliCheck");

describe("paliendromCheck", () => {
  describe("when the string is a palindrom", () => {
    it("should return true ", () => {
      const check = paliendromCheck("never odd or even");
      expect(check).toBe("neveroddoreven");
    });
  });

  describe("when the value is a not a string", () => {
    it("should return Error", () => {
      expect(() => paliendromCheck(12)).toThrow("This is not an string");
    });
  });
});
