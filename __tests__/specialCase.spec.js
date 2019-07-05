const specialCase = require("../lib/specialCase");

describe("specialCase", () => {
  describe("firstUniqueChar", () => {
    test("a", () => {
      const input = "a";
      expect(specialCase(input)).toEqual("a");
    });
    test("", () => {
      const input = "";
      expect(specialCase(input)).toEqual(undefined);
    });
    test("aa", () => {
      const input = "aa";
      expect(specialCase(input)).toEqual(undefined);
    });
    test("abba", () => {
      const input = "abba";
      expect(specialCase(input)).toEqual(undefined);
    });
    test("abcba", () => {
      const input = "abcba";
      expect(specialCase(input)).toEqual("c");
    });
  });
});
