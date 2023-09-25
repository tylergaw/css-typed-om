import CSSStyleValue from "./CSSStyleValue.js";

const privateSymbol = Symbol("privateConstructorKey");

/**
 * @typedef {object} StylePropertyMapReadOnly
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly}
 */
export default class StylePropertyMapReadOnly {
  constructor(key, styles) {
    if (key !== privateSymbol) {
      throw new TypeError("Illegal constructor");
    }

    this.styles = Object.keys(styles).reduce((obj, propertyName) => {
      obj[propertyName] = CSSStyleValue.parse(
        propertyName,
        styles[propertyName],
      );
      return obj;
    }, {});
  }

  /**
   * This is probably wrong, but what we're doing here is making it so you
   * can't use direct instantiation like new StylePropertyMapReadOnly. The idea
   * is in a real implementation, StylePropertyMapReadOnly objects can only be
   * accessed via Element.computedStyleMap(). Here we're kinda faking it with
   * this static method and the privateSymbol above. There's nothing keeping
   * someone from doing StylePropertyMapReadOnly._createInternal(). In fact,
   * we use that for testing purposes.
   */
  static _createInternal(styles) {
    return new StylePropertyMapReadOnly(privateSymbol, styles);
  }

  /**
   * @returns {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/size}
   */
  get size() {
    return Object.keys(this.styles).length;
  }

  // We include this just to not have throw an error if someone attempts to set.
  set size(_) {
    return Object.keys(this.styles).length;
  }

  /**
   * @param {string} propertyName
   * @returns {boolean}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/has}
   */
  has(propertyName) {
    return propertyName in this.styles;
  }

  /**
   * @param {string} propertyName
   * @returns {CSSStyleValue|null}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/get}
   */
  get(propertyName) {
    return this.styles[propertyName] || null;
  }

  /**
   * @param {string} propertyName
   * @returns {CSSStyleValue[]|null}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/getAll}
   */
  getAll(propertyName) {
    // TODO: Implement
    console.warn("StylePropertyMapReadOnly.getAll not implemented yet.");
    return undefined;
  }

  /**
   * @returns {array}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/entries}
   */
  *entries() {
    for (const [key, value] of Object.entries(this.styles)) {
      yield [key, value];
    }
  }

  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/forEach}
   */
  forEach(callback, thisArg) {
    Object.values(this.styles).forEach(callback, thisArg);
  }

  /**
   * @returns {Iterable}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/keys}
   */
  *keys() {
    for (const key of Object.keys(this.styles)) {
      yield key;
    }
  }

  /**
   * @returns {Iterable}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/values}
   */
  *values() {
    for (const val of Object.values(this.styles)) {
      yield val;
    }
  }
}
