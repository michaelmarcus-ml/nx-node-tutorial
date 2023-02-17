import { doAuth } from "./auth";

describe("auth", () => {
  describe("doAuth", () => {
    it("should work", () => {
      const auth = doAuth();
      expect(auth).toEqual({
        success: true,
        name: "Cheddar",
        token: expect.any(String)
      });
    });
  });
});
