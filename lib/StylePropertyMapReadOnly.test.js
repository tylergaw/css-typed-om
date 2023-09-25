import { describe, it } from "node:test";
import assert from "node:assert/strict";
import StylePropertyMapReadOnly from "./StylePropertyMapReadOnly.js";

describe("class StylePropertyMapReadOnly", () => {
  const mockStyles = {
    background: "white",
    color: "black",
    width: "100%",
  };

  const styleMap = StylePropertyMapReadOnly._createInternal(mockStyles);

  it("exists", () => {
    assert.ok(StylePropertyMapReadOnly);
  });

  it("throws when attempting direct instantiation", () => {
    assert.throws(() => {
      new StylePropertyMapReadOnly();
    }, TypeError);
  });

  it("the size property returns as expected", () => {
    assert.equal(styleMap.size, 3);
  });

  it("#has returns true when a property exists", () => {
    assert.equal(styleMap.has("color"), true);
  });

  it("#has returns false when a property doesn't exist", () => {
    assert.equal(styleMap.has("--null"), false);
  });

  it("#get returns expected values for standard properties", () => {
    const v1 = styleMap.get("background");
    const v2 = styleMap.get("color");
    const v3 = styleMap.get("width");
    assert.equal(v1.toString(), "white");
    assert.equal(v2.toString(), "black");
    assert.equal(v3.toString(), "100%");
  });

  it("#entries returns the expected iterable of styles prop/values", () => {
    const styles = styleMap.entries();

    for (const [key, value] of styles) {
      assert.equal(value.toString(), mockStyles[key]);
    }
  });

  it("#forEach returns the expected array of styles", () => {
    const expected = Object.values(mockStyles);
    styleMap.forEach((style, i) => {
      assert(style.toString(), expected[i]);
    });
  });

  it("#keys returns the expected iterable of property names", () => {
    const expected = Object.keys(mockStyles);
    const props = styleMap.keys();

    for (const prop of props) {
      assert.equal(expected.includes(prop), true);
    }
  });

  it("#values returns the expected iterable of property values", () => {
    const expected = Object.values(mockStyles);
    const vals = styleMap.values();

    for (const val of vals) {
      assert.equal(expected.includes(val.toString()), true);
    }
  });
});
