import units from './units.js';
import CSSUnitValue from './CSSUnitValue.js';
import CSSKeywordValue from './CSSKeywordValue.js';

export default string => {
	const unitParsingMatch = String(string).match(unitParsingMatcher);

	if (unitParsingMatch) {
		const [ , value, unit ] = unitParsingMatch;

		return new CSSUnitValue(value, unitKeys[unitValues.indexOf(unit || '')]);
	}

	return new CSSKeywordValue(string);
}

const unitKeys = Object.keys(units);
const unitValues = Object.values(units);
const unitParsingMatcher = new RegExp(`^([-+]?[0-9]*.?[0-9]+)(${unitValues.join('|')})?$`);
