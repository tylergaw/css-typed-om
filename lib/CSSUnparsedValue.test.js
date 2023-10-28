import { describe, it } from "node:test";
import assert from "node:assert/strict";
import CSSUnparsedValue from "./CSSUnparsedValue.js";

describe("class CSSUnparsedValue", () => {
  it("throws when no arguments passed to constructor", () => {
    assert.throws(() => {
      new CSSUnparsedValue();
    }, TypeError);
  });

  const members = ["1em", "#445566", "-45px"];
  let result = new CSSUnparsedValue(members);

  it("instances should have the expected length", () => {
    assert.equal(result.length, 3);
  });

  it("instances should have a toString method", () => {
    assert.equal(result.toString(), members.join(""));
  });

  it("instances should have expected iterable methods", () => {
    assert.equal(typeof result.entries, "function");
    assert.equal(typeof result.forEach, "function");
    assert.equal(typeof result.keys, "function");
    assert.equal(typeof result.values, "function");
  });

  it("members can be updated/set and retrieved by index", () => {
    result[0] = "4rem";
    assert.equal(result[0], "4rem");
  });
});
