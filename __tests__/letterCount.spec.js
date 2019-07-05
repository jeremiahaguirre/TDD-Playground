const letterCount = require("../lib/letterCount");

describe("letterCount", () => {
  describe("when there are letters", () => {
    it("should return number of each letter", () => {
      const count = letterCount("Helllllo", "l");
      console.log(count);
      expect(count).toEqual(5);
    });
  });

  describe("when the value is not a string", () => {
    it("should return Error", () => {
      expect(() => letterCount(12, "")).toThrow("This is not a string");
    });
  });

  describe("when no values are passed", () => {
    it("should return Error", () => {
      expect(() => letterCount()).toThrow("This is not a string");
    });
  });

  describe("when there is one letter", () => {
    it("should the number of letter to be one", () => {
      const count = letterCount("Hello", "o");
      expect(count).toEqual(1);
    });
  });
});
