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
   * @see {@link https://drafts.css-houdini.org/css-typed-om/#dom-stylepropertymap-append}
   * @todo implement
   */
  append(propertyName = null, propertyValue = null) {
    if (!propertyName || !propertyValue) {
      throw new TypeError(
        `Failed to execute 'set' on 'StylePropertyMap': propertyName and propertyValue arguments are required.`,
      );
    }

    if (Array.isArray(propertyValue)) {
      if (propertyValue.length === 0) {
        throw new TypeError(
          `Failed to execute 'append' on 'StylePropertyMap': Invalid type for property`,
        );
      }
    }

    // 1. If property is not a custom property name string, set property to property ASCII lowercased.
    const isCustomProp = propertyName.startsWith("--");
    // TODO: Handle custom property scenario
    const prop = !isCustomProp ? propertyName.toLowerCase() : propertyName;
    console.log(prop);

    // TODO: 2. If property is not a valid CSS property, throw a TypeError with:
    // "Failed to execute 'append' on 'StylePropertyMap': Invalid propertyName: <propertyName>"
    // TODO: 3. If property is not a list-valued property, throw a TypeError with:
    // "Failed to execute 'append' on 'StylePropertyMap': Property does not support multiple values"
    // TODO: 4. If any of the items in values have a non-null [[associatedProperty]] internal slot, and that slot’s value is anything other than property, throw a TypeError.
    // TODO: 5. If any of the items in values are a CSSUnparsedValue or CSSVariableReferenceValue object, throw a TypeError.

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
   * @param {string} propertyName
   * @param {string} propertyValue
   * @returns {undefined}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMap/set}
   */
  set(propertyName = null, propertyValue = null) {
    if (!propertyName || !propertyValue) {
      throw new TypeError(
        `Failed to execute 'set' on 'StylePropertyMap': propertyName and propertyValue arguments are required.`,
      );
    }

    this.declarations.setProperty(propertyName, String(propertyValue));
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
