import { describe, it } from "node:test";
import assert from "node:assert/strict";
import parseAsValue from "./parseCSSText.js";

describe("#parseAsValue", () => {
  it("returns CSSUnitValue when expected", () => {
    ["10rem", "20px"].forEach((val) => {
      assert.equal(parseAsValue(val).constructor.name, "CSSUnitValue");
    });
  });

  it("returns CSSKeywordValue when expected", () => {
    ["auto", "red", "rgb(0, 0, 0)"].forEach((val) => {
      assert.equal(parseAsValue(val).constructor.name, "CSSKeywordValue");
    });
  });
});
