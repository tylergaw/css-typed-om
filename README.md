# CSS Typed Object Model Polyfill

> [!WARNING]  
> This is a fork of the original css-typed-om to continue the excellent foundation built there. We may merge this fork back into the original at some point. Also note, this is heavy work-in-progress, if you use this in production, things are guaranteed to break or not work at all. See Feature Implementation Status below for details.

A polyfill for using CSS Typed OM in the browser and (I think) jsdom.

- [Spec](https://drafts.css-houdini.org/css-typed-om/)
- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Typed_OM_API)
- [Feature Implementation Status](#feature-implementation-status)

## Usage

> [!WARNING]  
> TODO: This needs to be upated for this fork. The only way to install with npm right now is via GitHub.

```bash
npm install css-typed-om
```

Polyfill the `window` object:

```js
import polyfill from "css-typed-om";
polyfill(window);
```

## Feature Implementation Status

This is a work in progress. We don't have 100% of the CSS Typed OM features implemented. This table breaks down the status of features. This is also a rough roadmap to a complete polyfill.

| Feature                                                                                                                  | Implemented  | Notes                                                               |
| ------------------------------------------------------------------------------------------------------------------------ | ------------ | ------------------------------------------------------------------- |
| **StylePropertyMapReadyOnly**                                                                                            |              |                                                                     |
| [StylePropertyMapReadyOnly](https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadyOnly)                  | ✅ Yes       |                                                                     |
| [StylePropertyMapReadyOnly.size](https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/size)         | ✅ Yes       |                                                                     |
| [StylePropertyMapReadyOnly.entries()](https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/entries) | ❌ No        |                                                                     |
| [StylePropertyMapReadyOnly.forEach()](https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/forEach) | ❌ No        |                                                                     |
| [StylePropertyMapReadyOnly.get()](https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/get)         | ✅ Yes       |                                                                     |
| [StylePropertyMapReadyOnly.getAll()](https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/getAll)   | ❌ No        |                                                                     |
| [StylePropertyMapReadyOnly.has()](https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/has)         | ✅ Yes       |                                                                     |
| [StylePropertyMapReadyOnly.keys()](https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/keys)       | ❌ No        |                                                                     |
| [StylePropertyMapReadyOnly.values()](https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/values)   | ❌ No        |                                                                     |
| **StylePropertyMap**                                                                                                     |              |                                                                     |
| [StylePropertyMap](https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMap)                                    | ✅ Yes       |                                                                     |
| [StylePropertyMap.append()](https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMap/append)                    | ❌ No        |                                                                     |
| [StylePropertyMap.clear()](https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMap/clear)                      | ❌ No        |                                                                     |
| [StylePropertyMap.delete()](https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMap/delete)                    | ❌ No        |                                                                     |
| [StylePropertyMap.set()](https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMap/set)                          | ✅ Yes       | 🧪 Needs tests                                                      |
| **CSSStyleValue**                                                                                                        |              |                                                                     |
| [CSSStyleValue](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue)                                          | ✅ Yes       |                                                                     |
| [CSSStyleValue.parse()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/parse_static)                     | ⚠️ Partially | Bare minimum functionality. 🧪 Needs tests                          |
| [CSSStyleValue.parseAll()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/parseAll_static)               | ❌ No        |                                                                     |
| [CSSStyleValue.toString()](https://developer.mozilla.org/en-US/docs/Glossary/Stringifier)                                | ❌ No        | Stringifier to value                                                |
| **CSSImageValue**                                                                                                        |              |                                                                     |
| [CSSImageValue](https://developer.mozilla.org/en-US/docs/Web/API/CSSImageValue)                                          | ❌ No        |                                                                     |
| [CSSImageValue.parse()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/parse_static)                     | ❌ No        | Inherits from CSSStyleValue                                         |
| [CSSImageValue.parseAll()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/parseAll_static)               | ❌ No        | Inherits from CSSStyleValue                                         |
| [CSSImageValue.toString()](https://developer.mozilla.org/en-US/docs/Glossary/Stringifier)                                | ❌ No        | Inherits from CSSStyleValue                                         |
| **CSSKeywordValue**                                                                                                      |              |                                                                     |
| [CSSKeywordValue](https://developer.mozilla.org/en-US/docs/Web/API/CSSKeywordValue)                                      | ✅ Yes       |                                                                     |
| [CSSKeywordValue() constructor](https://developer.mozilla.org/en-US/docs/Web/API/CSSKeywordValue/CSSKeywordValue)        | ✅ Yes       | 🧪 Needs tests                                                      |
| [CSSKeywordValue.value](https://developer.mozilla.org/en-US/docs/Web/API/CSSKeywordValue/value)                          | ✅ Yes       | 🧪 Needs tests                                                      |
| [CSSKeywordValue.toString()](https://developer.mozilla.org/en-US/docs/Glossary/Stringifier)                              | ✅ Yes       | 🧪 Needs tests                                                      |
| [CSSKeywordValue.parse()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/parse_static)                   | ❌ No        | Inherits from CSSStyleValue                                         |
| [CSSKeywordValue.parseAll()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/parseAll_static)             | ❌ No        | Inherits from CSSStyleValue                                         |
| **CSSNumericValue**                                                                                                      |              |                                                                     |
| [CSSNumericValue](https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue)                                      | ✅ Yes       |                                                                     |
| [CSSNumericValue.parse()](https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/parse_static)                 | ❌ No        | Inherits from CSSStyleValue                                         |
| [CSSNumericValue.parseAll()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/parseAll_static)             | ❌ No        | Inherits from CSSStyleValue                                         |
| [CSSNumericValue.add()](https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/add)                            | ✅ Yes       | 🧪 Needs tests                                                      |
| [CSSNumericValue.div()](https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/div)                            | ✅ Yes       | 🧪 Needs tests                                                      |
| [CSSNumericValue.equals()](https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/equals)                      | ❌ No        |                                                                     |
| [CSSNumericValue.max()](https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/max)                            | ✅ Yes       | 🧪 Needs tests                                                      |
| [CSSNumericValue.min()](https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/min)                            | ✅ Yes       | 🧪 Needs tests                                                      |
| [CSSNumericValue.mul()](https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/mul)                            | ✅ Yes       | 🧪 Needs tests                                                      |
| [CSSNumericValue.sub()](https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/sub)                            | ✅ Yes       | 🧪 Needs tests                                                      |
| [CSSNumericValue.to()](https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/to)                              | ❌ No        |                                                                     |
| [CSSNumericValue.toSum()](https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/toSum)                        | ❌ No        |                                                                     |
| [CSSNumericValue.type()](https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue/type)                          | ❌ No        |                                                                     |
| **CSSTransformValue**                                                                                                    |              |                                                                     |
| [CSSTransformValue](https://developer.mozilla.org/en-US/docs/Web/API/CSSTransformValue)                                  | ❌ No        |                                                                     |
| [CSSTransformValue() constructor](https://developer.mozilla.org/en-US/docs/Web/API/CSSTransformValue/CSSTransformValue)  | ❌ No        |                                                                     |
| [CSSTransformValue.length](https://developer.mozilla.org/en-US/docs/Web/API/CSSTransformValue/length)                    | ❌ No        |                                                                     |
| [CSSTransformValue.is2D](https://developer.mozilla.org/en-US/docs/Web/API/CSSTransformValue/is2D)                        | ❌ No        |                                                                     |
| [CSSTransformValue.toMatrix()](https://developer.mozilla.org/en-US/docs/Web/API/CSSTransformValue/toMatrix)              | ❌ No        |                                                                     |
| [CSSTransformValue.entries()](https://developer.mozilla.org/en-US/docs/Web/API/CSSTransformValue/entries)                | ❌ No        |                                                                     |
| [CSSTransformValue.forEach()](https://developer.mozilla.org/en-US/docs/Web/API/CSSTransformValue/forEach)                | ❌ No        |                                                                     |
| [CSSTransformValue.keys()](https://developer.mozilla.org/en-US/docs/Web/API/CSSTransformValue/keys)                      | ❌ No        |                                                                     |
| [CSSTransformValue.values()](https://developer.mozilla.org/en-US/docs/Web/API/CSSTransformValue/values)                  | ❌ No        |                                                                     |
| [CSSTransformValue.toString()](https://developer.mozilla.org/en-US/docs/Glossary/Stringifier)                            | ❌ No        | Inherits from CSSStyleValue                                         |
| [CSSTransformValue.parse()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/parse_static)                 | ❌ No        | Inherits from CSSStyleValue                                         |
| [CSSTransformValue.parseAll()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/parseAll_static)           | ❌ No        | Inherits from CSSStyleValue                                         |
| **CSSUnparsedValue**                                                                                                     |              |                                                                     |
| [CSSUnparsedValue](https://developer.mozilla.org/en-US/docs/Web/API/CSSUnparsedValue)                                    | ✅ Yes       |                                                                     |
| [CSSUnparsedValue() constructor](https://developer.mozilla.org/en-US/docs/Web/API/CSSUnparsedValue/CSSUnparsedValue)     | ✅ Yes       |                                                                     |
| [CSSUnparsedValue.length](https://developer.mozilla.org/en-US/docs/Web/API/CSSUnparsedValue/length)                      | ✅ Yes       |                                                                     |
| [CSSUnparsedValue.entries()](https://developer.mozilla.org/en-US/docs/Web/API/CSSUnparsedValue/entries)                  | ✅ Yes       |                                                                     |
| [CSSUnparsedValue.forEach()](https://developer.mozilla.org/en-US/docs/Web/API/CSSUnparsedValue/forEach)                  | ✅ Yes       |                                                                     |
| [CSSUnparsedValue.keys()](https://developer.mozilla.org/en-US/docs/Web/API/CSSUnparsedValue/keys)                        | ✅ Yes       |                                                                     |
| [CSSUnparsedValue.values()](https://developer.mozilla.org/en-US/docs/Web/API/CSSUnparsedValue/values)                    | ✅ Yes       |                                                                     |
| [CSSUnparsedValue.toString()](https://developer.mozilla.org/en-US/docs/Glossary/Stringifier)                             | ❌ No        | Inherits from CSSStyleValue                                         |
| **CSSUnitValue**                                                                                                         |              | Inherits from CSSNumericValue, has same static and instance methods |
| [CSSUnitValue](https://developer.mozilla.org/en-US/docs/Web/API/CSSUnitValue)                                            | ✅ Yes       |                                                                     |
| [CSSUnitValue() constructor](https://developer.mozilla.org/en-US/docs/Web/API/CSSUnitValue/CSSUnitValue)                 | ✅ Yes       | 🧪 Needs tests                                                      |
| [CSSUnitValue.value](https://developer.mozilla.org/en-US/docs/Web/API/CSSUnitValue/value)                                | ✅ Yes       | 🧪 Needs tests                                                      |
| [CSSUnitValue.unit](https://developer.mozilla.org/en-US/docs/Web/API/CSSUnitValue/unit)                                  | ✅ Yes       | 🧪 Needs tests                                                      |
| [CSSUnitValue.toString()](https://developer.mozilla.org/en-US/docs/Glossary/Stringifier)                                 | ✅ Yes       | 🧪 Needs tests                                                      |
| [CSSUnitValue.parse()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/parse_static)                      | ❌ No        | Inherits from CSSStyleValue                                         |
| [CSSUnitValue.parseAll()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/parseAll_static)                | ❌ No        | Inherits from CSSStyleValue                                         |
| **CSSMathValue**                                                                                                         |              | Inherits from CSSNumericValue, has same static and instance methods |
| [CSSMathValue](https://developer.mozilla.org/en-US/docs/Web/API/CSSMathValue)                                            | ❌ No        |                                                                     |
| [CSSMathValue.operator](https://developer.mozilla.org/en-US/docs/Web/API/CSSMathValue/operator)                          | ❌ No        |                                                                     |
| **CSSMathInvert**                                                                                                        |              | Inherits from CSSMathValue, has same static and instance methods    |
| [CSSMathInvert](https://developer.mozilla.org/en-US/docs/Web/API/CSSMathInvert)                                          | ✅ Yes       |                                                                     |
| [CSSMathInvert() constructor](https://developer.mozilla.org/en-US/docs/Web/API/CSSMathInvert/CSSMathInvert)              | ⚠️ Partially | Needs exception handling. 🧪 Needs tests                            |
| [CSSMathInvert.value](https://developer.mozilla.org/en-US/docs/Web/API/CSSMathInvert/value)                              | ✅ Yes       | 🧪 Needs tests                                                      |
| [CSSMathInvert.toString()](https://developer.mozilla.org/en-US/docs/Glossary/Stringifier)                                | ✅ Yes       | 🧪 Needs tests                                                      |
| [CSSMathInvert.parse()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/parse_static)                     | ❌ No        | Inherits from CSSStyleValue                                         |
| [CSSMathInvert.parseAll()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/parseAll_static)               | ❌ No        | Inherits from CSSStyleValue                                         |
| **CSSMathMax**                                                                                                           |              | Inherits from CSSMathValue, has same static and instance methods    |
| [CSSMathMax](https://developer.mozilla.org/en-US/docs/Web/API/CSSMathMax)                                                | ✅ Yes       |                                                                     |
| [CSSMathMax() constructor](https://developer.mozilla.org/en-US/docs/Web/API/CSSMathMax/CSSMathMax)                       | ⚠️ Partially | Needs exception handling. 🧪 Needs tests                            |
| [CSSMathMax.values](https://developer.mozilla.org/en-US/docs/Web/API/CSSMathMax/values)                                  | ✅ Yes       | 🧪 Needs tests                                                      |
| [CSSMathMax.toString()](https://developer.mozilla.org/en-US/docs/Glossary/Stringifier)                                   | ✅ Yes       | 🧪 Needs tests                                                      |
| [CSSMathMax.parse()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/parse_static)                        | ❌ No        | Inherits from CSSStyleValue                                         |
| [CSSMathMax.parseAll()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/parseAll_static)                  | ❌ No        | Inherits from CSSStyleValue                                         |
| **CSSMathMin**                                                                                                           |              | Inherits from CSSMathValue, has same static and instance methods    |
| [CSSMathMin](https://developer.mozilla.org/en-US/docs/Web/API/CSSMathMin)                                                | ✅ Yes       |                                                                     |
| [CSSMathMin() constructor](https://developer.mozilla.org/en-US/docs/Web/API/CSSMathMin/CSSMathMin)                       | ⚠️ Partially | Needs exception handling. 🧪 Needs tests                            |
| [CSSMathMin.values](https://developer.mozilla.org/en-US/docs/Web/API/CSSMathMin/values)                                  | ✅ Yes       | 🧪 Needs tests                                                      |
| [CSSMathMin.toString()](https://developer.mozilla.org/en-US/docs/Glossary/Stringifier)                                   | ✅ Yes       | 🧪 Needs tests                                                      |
| [CSSMathMin.parse()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/parse_static)                        | ❌ No        | Inherits from CSSStyleValue                                         |
| [CSSMathMin.parseAll()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/parseAll_static)                  | ❌ No        | Inherits from CSSStyleValue                                         |
| **CSSMathNegate**                                                                                                        |              | Inherits from CSSMathValue, has same static and instance methods    |
| TODO: Complete this section                                                                                              |              |                                                                     |
| **CSSMathProduct**                                                                                                       |              | Inherits from CSSMathValue, has same static and instance methods    |
| TODO: Complete this section                                                                                              |              |                                                                     |
| **CSSMathSum**                                                                                                           |              | Inherits from CSSMathValue, has same static and instance methods    |
| TODO: Complete this section                                                                                              |              |                                                                     |

> [!WARNING]  
> NOTE: Below here is still being reformated and some things need to be documented in Feature Implementation Status.

## CSS Typed OM usage

```js
// Element styles
document.body.attributeStyleMap.set("padding-top", CSS.px(42));
document.body.attributeStyleMap.get("padding-top"); /* CSSUnitValue {
  value: 42,
  unit: 'px'
}.toString() => 42px */

document.body.attributeStyleMap.set("opacity", 0.3);
typeof document.body.attributeStyleMap.get("opacity").value; // number
document.body.attributeStyleMap.get("opacity").unit; // "number"

// Stylesheet rules
document.styleSheets[0].cssRules[0].styleMap.set("padding-top", "100px");
document.styleSheets[0].cssRules[0].styleMap.get(
  "padding-top",
); /* CSSUnitValue {
  value: 100,
  unit: 'px'
}.toString() => 100px */

// Math products
CSS.px(15).add(CSS.rem(10), CSS.em(5)); /* CSSMathSum {
  operator: "sum",
  values: [
    CSSUnitValue { value: 15, unit: 'px' },
    CSSUnitValue { value: 10, unit: 'rem' },
    CSSUnitValu { value: 5, unit: 'em' }
  ]
}.toString() => calc(15px + 10rem + 5em) */

CSS.px(15).mul(CSS.rem(10), CSS.em(5)); /* CSSMathProduct {
  operator: "product",
  values: [
    CSSUnitValue { value: 15, unit: 'px' },
    CSSUnitValue { value: 10, unit: 'rem' },
    CSSUnitValu { value: 5, unit: 'em' }
  ]
}.toString() => calc(15px * 10rem * 5em) */

CSS.px(15).sub(CSS.rem(10), CSS.em(5)); /* CSSMathSum {
  operator: "sum",
  values: [
    CSSUnitValue { value: 15, unit: 'px' },
    CSSUnitValue { value: -10, unit: 'rem' },
    CSSUnitValu { value: -5, unit: 'em' }
  ]
}.toString() => calc(15px + -10rem + -5em) */

CSS.px(15).div(CSS.rem(10), CSS.em(5)); /* CSSMathProduct {
  operator: "product",
  values: [
    CSSUnitValue { value: 15, unit: 'px' },
    CSSMathInvert {
      operator: 'invert',
      value: CSSUnitValue { value: 10, unit: 'rem' }
    },
    CSSMathInvert {
      operator: 'invert',
      value: CSSUnitValue { value: 5, unit: 'em' }
    }
  ]
}.toString() => calc(15px / 10rem / 5em) */

CSS.px(15).max(CSS.rem(10), CSS.em(5)); /* CSSMathMax {
  operator: 'max',
  values: [
    CSSUnitValue { value: 15, unit: 'px' },
    CSSUnitValue { value: 10, unit: 'rem' },
    CSSUnitValu { value: 5, unit: 'em' }
  ],
}.toString() => max(15px, 10rem, 5em) */

CSS.px(15).min(CSS.rem(10), CSS.em(5)); /* CSSMathMin {
  operator: 'min',
  values: [
    CSSUnitValue { value: 15, unit: 'px' },
    CSSUnitValue { value: 10, unit: 'rem' },
    CSSUnitValu { value: 5, unit: 'em' }
  ],
}.toString() => min(15px, 10rem, 5em) */
```

### polyfill

The `polyfill` function adds CSS Typed OM interfaces to `window` if they do not
already exist:

It then adds the following functions to `CSS` if they do not already exist:

- `number`
- `percent`
- `em`
- `ex`
- `ch`
- `rem`
- `vw`
- `vh`
- `vmin`
- `vmax`
- `cm`
- `mm`
- `in`
- `pt`
- `pc`
- `px`
- `Q`
- `deg`
- `grad`
- `rad`
- `turn`
- `s`
- `ms`
- `Hz`
- `kHz`
- `dpi`
- `dpcm`
- `dppx`
- `fr`

The new `CSSUnitValue` instances returned by these methods extend
`CSSNumericValue`, which allow them to use the following methods:

- `add`
- `div`
- `max`
- `min`
- `mul`
- `sub`

The result of these transforms may be a new `CSSUnitValue` instance or a new
`CSSMathProduct`, `CSSMathMax`, `CSSMathMin`, or `CSSMathSum` instance.

They all stringify back into compliant CSS.
