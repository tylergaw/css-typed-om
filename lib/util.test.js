import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { isValidProperty } from "./util.js";

describe("util module", () => {
  describe("isValidProperty function", () => {
    it("knows when properties are valid", () => {
      assert.equal(isValidProperty("color"), true);
      assert.equal(isValidProperty("animation-name"), true);
    });

    it("knows when properties are invalid", () => {
      assert.equal(isValidProperty("horce"), false);
      assert.equal(isValidProperty("dIsPlaY"), false);
    });
  });
});
