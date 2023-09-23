import parseAsValue from './parse-as-value';

export default class CSSStyleValue {
	constructor() {
		// We allow for classes that extend CSSStyleValue to have constructors
		// but not CSSStyleValue itself.
		if (this.constructor.name === 'CSSStyleValue') {
			throw new TypeError('Illegal constructor');
		}
	}

	/**
	 * @param {string} property
	 * @param {string} cssText
	 * See https://drafts.css-houdini.org/css-typed-om/#parse-a-cssstylevalue
	 */
	static parse(property, cssText) {
		const isCustomProp = property.startsWith('--');

		if (isCustomProp) {
			// FIXME: Custom properties should return a CSSUnparsedValue
			return undefined;
		} else {
			const prop = property.toLowerCase();

			// FIXME: Test if this is a valid CSS prop
			const isValid = true;

			if (!isValid) {
				throw new TypeError(`${prop} is not a valid CSS property.`);
			}

			// FIXME: Account for cssText with calc
			return parseAsValue(cssText);
		}
	}

	/**
	 * @param {string} property
	 * @param {string} cssText
	 * See https://drafts.css-houdini.org/css-typed-om/#parse-a-cssstylevalue
	 */
	// eslint-disable-next-line
	static parseAll(property, cssText) {
		// FIXME: Implement
		return undefined;
	}
}
