import { describe, it } from "node:test";
import assert from "node:assert/strict";
import MockCSSStyleDeclaration from "./mocks/MockCSSStyleDeclaration.js";
import StylePropertyMap, {
  stylePropertyMapCreator,
} from "./StylePropertyMap.js";

/**
 * NOTE: A lot of these test props/methods inherited from StylePropertyMapReadOnly
 * so, case could be made that those don't need tested here too, but being safe
 */
describe("class StylePropertyMap", () => {
  const mockStyles = {
    background: "red",
    color: "#1f1f1f",
    width: "500px",
  };

  const styleMapInstance = stylePropertyMapCreator(
    new MockCSSStyleDeclaration(mockStyles),
  );

  it("exists", () => {
    assert.ok(StylePropertyMap);
  });

  it("throws when attempting direct instantiation", () => {
    assert.throws(() => {
      new StylePropertyMap();
    }, TypeError);
  });

  it("the size property returns as expected", () => {
    assert.equal(styleMapInstance.size, 3);
  });

  it("#has returns true when a property exists", () => {
    assert.equal(styleMapInstance.has("color"), true);
  });

  it("#has returns false when a property doesn't exist", () => {
    assert.equal(styleMapInstance.has("--null"), false);
  });

  it("#get throws without the required argument", () => {
    assert.throws(() => {
      styleMapInstance.get();
    }, TypeError);
  });

  it("#get returns expected values for standard properties", () => {
    const v1 = styleMapInstance.get("background");
    const v2 = styleMapInstance.get("color");
    const v3 = styleMapInstance.get("width");
    assert.equal(v1.toString(), "red");
    assert.equal(v2.toString(), "#1f1f1f");
    assert.equal(v3.toString(), "500px");
  });

  it("#get returns null if the property isn't in the map", () => {
    assert.equal(styleMapInstance.get("font-family"), null);
  });

  it("#set throws without required arguments", () => {
    assert.throws(() => {
      styleMapInstance.set();
    }, TypeError);

    assert.throws(() => {
      styleMapInstance.set("max-height");
    }, TypeError);
  });

  it("#set sets the expected property and value", () => {
    // First check that the property is not set.
    assert.equal(styleMapInstance.get("max-height"), null);
    // Then set it and check that it is set.
    styleMapInstance.set("max-height", "500px");
    assert.equal(styleMapInstance.get("max-height"), "500px");
  });

  it("#entries returns the expected iterable of styles prop/values", () => {
    const entries = styleMapInstance.entries();
    for (const [propertyName, value] of entries) {
      assert.equal(value.toString(), mockStyles[propertyName]);
    }
  });

  it("#forEach returns the expected array of styles", () => {
    const expected = Object.values(mockStyles);
    styleMapInstance.forEach((style, i) => {
      assert(style.toString(), expected[i]);
    });
  });

  it("#keys returns the expected iterable of property names", () => {
    const expected = Object.keys(mockStyles);
    const props = styleMapInstance.keys();

    for (const prop of props) {
      assert.equal(expected.includes(prop), true);
    }
  });

  it("#values returns the expected iterable of property values", () => {
    const expected = Object.values(mockStyles);
    const vals = styleMapInstance.values();

    for (const val of vals) {
      assert.equal(expected.includes(val.toString()), true);
    }
  });
});
