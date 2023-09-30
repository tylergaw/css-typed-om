import StylePropertyMapReadOnly from "./StylePropertyMapReadOnly.js";

/**
 * StylePropertyMap aren't created directly. They are the type of the
 * CSSStyleRule.styleMap read-only property.
 *
 * @typedef {object} StylePropertyMap
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMap}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleRule/styleMap}
 */
export default class StylePropertyMap extends StylePropertyMapReadOnly {
  // A nice to have, gives a nice name when calling toString on instances.
  get [Symbol.toStringTag]() {
    return "StylePropertyMap";
  }

  /**
   * @param {string} property
   * @param {string} value
   * @returns {undefined}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMap/append}
   * @todo Implement
   */
  append() {
    console.warn("StylePropertyMap.append not implemented yet.");
    return undefined;
  }

  /**
   * @returns {undefined}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMap/clear}
   * @todo Implement
   */
  clear() {
    console.warn("StylePropertyMap.clear not implemented yet.");
    return undefined;
  }

  /**
   * @param {string} property
   * @returns {undefined}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMap/delete}
   * @todo Implement
   */
  delete() {
    console.warn("StylePropertyMap.delete not implemented yet.");
    return undefined;
  }

  /**
   * @param {string} property
   * @param {string} value
   * @returns {undefined}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMap/set}
   */
  set(...args) {
    if (args.length < 2) {
      throw new TypeError(
        `Failed to execute 'set' on 'StylePropertyMap': 2 arguments required, but only ${args.length} present.`,
      );
    }

    const [property, value] = args;
    this.declarations[property] = String(value);
  }
}

/**
 * Create a StylePropertyMap instance with the given declarations.
 *
 * @param {object} declarations
 * @returns {StylePropertyMap}
 */
export function stylePropertyMapCreator(declarations) {
  const stylePropertyMap = Object.create(StylePropertyMap.prototype);
  Object.defineProperty(stylePropertyMap, "declarations", {
    value: declarations,
  });
  return stylePropertyMap;
}
