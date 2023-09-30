import CSSKeywordValue from "./CSSKeywordValue";
import CSSMathInvert from "./CSSMathInvert";
import CSSMathMax from "./CSSMathMax";
import CSSMathMin from "./CSSMathMin";
import CSSMathProduct from "./CSSMathProduct";
import CSSMathSum from "./CSSMathSum";
import CSSStyleValue from "./CSSStyleValue";
import CSSUnitValue from "./CSSUnitValue";
import CSSUnparsedValue from "./CSSUnparsedValue";
import StylePropertyMapReadOnly, {
  stylePropertyMapReadOnlyCreator,
} from "./StylePropertyMapReadOnly";
import StylePropertyMap, { stylePropertyMapCreator } from "./StylePropertyMap";
import units from "./units.js";

export default function polyfill(window) {
  if (!window.CSS) window.CSS = class CSS {};

  Object.keys(units).forEach((unit) => {
    if (!(unit in window.CSS)) {
      window.CSS[unit] = (value) => new CSSUnitValue(value, unit);
    }
  });

  if (!("computedStyleMap" in window.Element.prototype)) {
    Object.defineProperty(window.Element.prototype, "computedStyleMap", {
      writable: false,
      configurable: false,
      value: function () {
        return stylePropertyMapReadOnlyCreator(window.getComputedStyle(this));
      },
    });
  }

  const styleMapDescriptor = {
    configurable: false,
    enumerable: true,
    get() {
      return stylePropertyMapCreator(this.style);
    },
  };

  if (!("styleMap" in window.CSSStyleRule.prototype)) {
    Object.defineProperty(
      window.CSSStyleRule.prototype,
      "styleMap",
      styleMapDescriptor,
    );
  }

  if (!("attributeStyleMap" in window.Element.prototype)) {
    Object.defineProperty(
      window.Element.prototype,
      "attributeStyleMap",
      styleMapDescriptor,
    );
  }

  if (!window.CSSKeywordValue) window.CSSKeywordValue = CSSKeywordValue;
  if (!window.CSSMathInvert) window.CSSMathInvert = CSSMathInvert;
  if (!window.CSSMathMax) window.CSSMathMax = CSSMathMax;
  if (!window.CSSMathMin) window.CSSMathMin = CSSMathMin;
  if (!window.CSSMathProduct) window.CSSMathProduct = CSSMathProduct;
  if (!window.CSSMathSum) window.CSSMathSum = CSSMathSum;
  if (!window.CSSStyleValue) window.CSSStyleValue = CSSStyleValue;
  if (!window.CSSUnitValue) window.CSSUnitValue = CSSUnitValue;
  if (!window.CSSUnparsedValue) window.CSSUnparsedValue = CSSUnparsedValue;
  if (!window.StylePropertyMapReadOnly)
    window.StylePropertyMapReadOnly = StylePropertyMapReadOnly;
  if (!window.StylePropertyMap) window.StylePropertyMap = StylePropertyMap;
}
