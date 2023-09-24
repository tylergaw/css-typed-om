import CSSStyleValue from "./CSSStyleValue.js";

/**
 * Spec: https://drafts.css-houdini.org/css-typed-om/#unparsedvalue-objects
 * MDN: https://developer.mozilla.org/en-US/docs/Web/API/CSSUnparsedValue
 */
export default class CSSUnparsedValue extends CSSStyleValue {
  constructor(members = []) {
    super(true);

    if (members.length < 1) {
      throw new TypeError(
        `Failed to construct 'CSSUnparsedValue': 1 argument required, but only ${members.length} present.`,
      );
    }

    this.members = members;
  }

  *[Symbol.iterator]() {
    yield* this.members;
  }

  entries() {
    return this.members.entries();
  }

  forEach(callback, thisArg) {
    this.members.forEach(callback, thisArg);
  }

  keys() {
    return this.members.keys();
  }

  values() {
    return this.members.values();
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    return this.members[index];
  }

  set(index, val) {
    if (index < 0 || index >= this.length) {
      throw new RangeError(
        `Failed to set an indexed property on 'CSSUnparsedValue': The index provided (${index}) is outside the range [0, ${
          this.length - 1
        }].`,
      );
    }

    // TODO: Add these checks after implementing CSSVariableReferenceValue
    // if (typeof val === 'string' || val instanceof CSSVariableReferenceValue) {
    //   this.members[index] = val;
    // } else {
    //   throw new TypeError('Value must be a USVString or an instance of CSSVariableReferenceValue');
    // }
  }

  get length() {
    return this.members.length;
  }
}
