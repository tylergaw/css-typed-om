import CSSStyleValue from "./CSSStyleValue.js";

/**
 * @typedef {object} StylePropertyMapReadOnly
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly}
 */
export default class StylePropertyMapReadOnly {
  constructor() {
    throw new TypeError("Illegal constructor");
  }

  // A nice to have, gives a nice name when calling toString on instances.
  get [Symbol.toStringTag]() {
    return "StylePropertyMapReadOnly";
  }

  // Makes instances of StylePropertyMapReadOnly iterable.
  *[Symbol.iterator]() {
    yield* this.entries();
  }

  /**
   * @returns {number}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/size}
   */
  get size() {
    return this.declarations.length;
  }

  // We include this just to not have throw an error if someone attempts to set.
  set size(_) {
    return this.size;
  }

  /**
   * @param {string} propertyName
   * @returns {boolean}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/has}
   */
  has(propertyName) {
    let hasProp = false;

    for (let i = 0; i < this.declarations.length; i++) {
      if (this.declarations.item(i) === propertyName) {
        hasProp = true;
        break;
      }
    }

    return hasProp;
  }

  /**
   * @param {string} propertyName
   * @returns {CSSStyleValue|null}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/get}
   */
  get(propertyName = null) {
    if (!propertyName) {
      throw new TypeError(
        `Failed to execute 'get' on 'StylePropertyMap': 1 argument required, but only 0 present.`,
      );
    }

    return this.declarations.getPropertyValue(propertyName) || null;
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
    for (let i = 0; i < this.declarations.length; i++) {
      const propertyName = this.declarations.item(i);
      const value = this.declarations.getPropertyValue(propertyName);
      yield [propertyName, CSSStyleValue.parse(propertyName, value)];
    }
  }

  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/forEach}
   */
  forEach(callback, thisArg) {
    for (let i = 0; i < this.declarations.length; i++) {
      const propertyName = this.declarations.item(i);
      const value = this.declarations.getPropertyValue(propertyName);
      callback(CSSStyleValue.parse(propertyName, value), thisArg);
    }
  }

  /**
   * @returns {Iterable}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/keys}
   */
  *keys() {
    for (let i = 0; i < this.declarations.length; i++) {
      yield this.declarations.item(i);
    }
  }

  /**
   * @returns {Iterable}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/values}
   */
  *values() {
    for (let i = 0; i < this.declarations.length; i++) {
      const propertyName = this.declarations.item(i);
      const value = this.declarations.getPropertyValue(propertyName);
      yield CSSStyleValue.parse(propertyName, value);
    }
  }
}

/**
 * Create a StylePropertyMapReaOnly instance with the given declarations.
 *
 * @param {object} declarations
 * @returns {StylePropertyMapReadOnly}
 */
export function stylePropertyMapReadOnlyCreator(declarations) {
  const stylePropertyMapInstance = Object.create(
    StylePropertyMapReadOnly.prototype,
  );
  Object.defineProperty(stylePropertyMapInstance, "declarations", {
    value: declarations,
  });
  return stylePropertyMapInstance;
}
