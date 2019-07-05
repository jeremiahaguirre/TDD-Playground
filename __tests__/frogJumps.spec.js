const frogJumps = require("../lib/frogJumps");

describe("frogJumbs", () => {
  describe("when start is equ to end", () => {
    it("should return 0", () => {
      const jumps = frogJumps(10, 10, 5);
      expect(jumps).toEqual(0);
    });
  });

  describe("when jumpLength is negative", () => {
    it("should return Error", () => {
      expect(() => frogJumps(10, 10, -10)).toThrow(
        "invalid jumpLength provided"
      );
    });
  });

  describe("when start is 10, end is 100, and jumpLength is 5", () => {
    it("should return jumps = 18", () => {
      expect(frogJumps(10, 100, 5)).toStrictEqual(18);
    });
  });

  describe("when there are no arguments passed into function", () => {
    it("should return error", () => {
      expect(() => frogJumps()).toThrow("no values where passed in");
    });
  });
});
