import parseCSSText from "./parseCSSText.js";
import { isValidProperty } from "./util.js";

/**
 * @see {@link https://drafts.css-houdini.org/css-typed-om/#cssstylevalue}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue}
 * @typedef {object} CSSStyleValue
 */
export default class CSSStyleValue {
  constructor() {
    /*
      We allow for CSSStyleValue subclasses to have constructors but not
      CSSStyleValue itself. For direct instances we use cssStyleValueCreator.
    */
    if (this.constructor.name === "CSSStyleValue") {
      throw new TypeError("Illegal constructor");
    }
  }

  /**
   * @see {@link https://drafts.css-houdini.org/css-typed-om/#stylevalue-serialization}
   */
  toString() {
    return String(this.value);
  }

  /**
   * @param {string} property
   * @param {string} cssText
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/parse_static}
   * @see {@link https://drafts.css-houdini.org/css-typed-om/#parse-a-cssstylevalue}
   */
  static parse(propertyName = null, cssText = null) {
    if (!propertyName || !cssText) {
      throw new TypeError(
        `Failed to execute 'parse' on 'CSSStyleValue': propertyName and cssText arguments are required.`,
      );
    }

    // TODO: Implement custom propery handling
    const isCustomProp = propertyName.startsWith("--");
    if (isCustomProp) {
      console.warn(
        "CSSStyleValue.parse does not handle CSS custom properties yet.",
      );
      return undefined;
    }

    const prop = propertyName.toLowerCase();
    if (!isValidProperty(prop)) {
      throw new TypeError(
        `Failed to execute 'parse' on 'CSSStyleValue': ${prop} is an invalid property name`,
      );
    }

    return parseCSSText(cssText);
  }

  /**
   * @param {string} propertyName
   * @param {string} cssText
   * @see {@link https://drafts.css-houdini.org/css-typed-om/#parse-a-cssstylevalue}
   * @todo implement
   */
  static parseAll() {
    console.warn("CSSStyleValue.parseAll not implemented yet.");
    return undefined;
  }
}

/**
 * Create a CSSStyleValue instance with the given cssText
 *
 * @param {string} cssText
 * @returns {CSSStyleValue}
 */
export function cssStyleValueCreator(cssText) {
  const cssStyleValue = Object.create(CSSStyleValue.prototype);
  Object.defineProperty(cssStyleValue, "value", {
    value: cssText,
  });
  return cssStyleValue;
}
