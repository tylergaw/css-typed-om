import { describe, it } from "node:test";
import assert from "node:assert/strict";
import parseCSSText from "./parseCSSText.js";

describe("#parseCSSText", () => {
  /**
   * @see {@link https://drafts.css-houdini.org/css-typed-om/#direct-cssstylevalue}
   */
  it("parses values that don't have a specialized subclass", () => {
    const tests = ["1px solid red", "#f1f1f1"];

    tests.forEach((t, i) => {
      const result = parseCSSText(t);
      assert.equal(result.constructor.name, "CSSStyleValue");
      assert.equal(result.toString(), tests[i]);
    });
  });

  /**
   * @see {@link https://drafts.css-houdini.org/css-typed-om/#keywordvalue-objects}
   */
  it("parses values that are CSSKeywordValue objects", () => {
    const tests = ["initial", "block", "static"];

    tests.forEach((t, i) => {
      const result = parseCSSText(t);
      assert.equal(result.constructor.name, "CSSKeywordValue");
      assert.equal(result.toString(), tests[i]);
    });
  });

  /**
   * @see {@link https://drafts.css-houdini.org/css-typed-om/#simple-numeric}
   */
  it("parses values that produce CSSUnitValue", () => {
    ["10rem", "20px"].forEach((val) => {
      assert.equal(parseCSSText(val).constructor.name, "CSSUnitValue");
    });
  });
});
