const _value$2=new WeakMap;class CSSKeywordValue{get value(){return _value$2.get(this)}set value(newValue){_value$2.set(this,String(newValue))}toString(){return`${this.value}`}constructor(...args){if(args.length<1)throw new TypeError(`Failed to construct 'CSSKeywordValue': 1 arguments required, but only ${args.length} present.`);_value$2.set(this,String(args[0]))}}Object.defineProperties(CSSKeywordValue.prototype,{value:{enumerable:!0}});const _value$1=new WeakMap;class CSSMathInvert{get operator(){return"invert"}get value(){return _value$1.get(this)}toString(){return`calc(1 / ${_value$1.get(this)})`}constructor(value){_value$1.set(this,value)}}const _values$3=new WeakMap;class CSSMathMax{get operator(){return"max"}get values(){return _values$3.get(this)}toString(){return`max(${_values$3.get(this).join(", ")})`}constructor(...values){_values$3.set(this,values)}}const _values$2=new WeakMap;class CSSMathMin{get operator(){return"min"}get values(){return _values$2.get(this)}toString(){return`min(${_values$2.get(this).join(", ")})`}constructor(...values){_values$2.set(this,values)}}const _values$1=new WeakMap;class CSSMathProduct{get operator(){return"product"}get values(){return _values$1.get(this)}toString(){return`calc(${_values$1.get(this).reduce(((contents,value)=>""+(value instanceof CSSMathInvert?`${contents?`${contents} / `:"1 / "}${value.value}`:`${contents?`${contents} * `:""}${value}`)),"")})`}constructor(...values){_values$1.set(this,values)}}const _values=new WeakMap;class CSSMathSum{get operator(){return"product"}get values(){return _values.get(this)}toString(){return`calc(${_values.get(this).reduce(((contents,value)=>`${contents?`${contents} + `:""}${value}`),"")})`}constructor(...values){_values.set(this,values)}}var units={number:"",percent:"%",em:"em",ex:"ex",ch:"ch",rem:"rem",vw:"vw",vh:"vh",vmin:"vmin",vmax:"vmax",cm:"cm",mm:"mm",in:"in",pt:"pt",pc:"pc",px:"px",Q:"Q",deg:"deg",grad:"grad",rad:"rad",turn:"turn",s:"s",ms:"ms",Hz:"Hz",kHz:"kHz",dpi:"dpi",dpcm:"dpcm",dppx:"dppx",fr:"fr"};class CSSNumericValue{add(...args){const Constructor=this.constructor,result=new Constructor(this.value,this.unit),values=[];for(let arg of args)if(arg instanceof Constructor)values.length||result.unit!==arg.unit?values.push(arg):result.value+=arg.value;else{if(!(arg instanceof CSSMathProduct||arg instanceof CSSMathMax||arg instanceof CSSMathMin||arg instanceof CSSMathInvert))return null;values.push(arg)}return values.length?new CSSMathSum(result,...values):result}div(...args){const Constructor=this.constructor,result=new Constructor(this.value,this.unit),values=[];for(let arg of args){if("number"==typeof arg&&(arg=new CSSUnitValue(arg,"number")),!(arg instanceof Constructor))return null;values.length||result.unit!==arg.unit&&"number"!==arg.unit?values.push(arg):result.value/=arg.value}return values.length?new CSSMathProduct(result,...values.map((value=>new CSSMathInvert(value)))):result}max(...args){const result=new CSSUnitValue(this.value,this.unit),values=[result];for(let arg of args){if(!(arg instanceof CSSUnitValue))return null;values.length>1||result.unit!==arg.unit?values.push(arg):result.value=Math.max(result.value,arg.value)}return values.length>1?new CSSMathMax(...values):result}min(...args){const result=new CSSUnitValue(this.value,this.unit),values=[result];for(let arg of args){if(!(arg instanceof CSSUnitValue))return null;values.length>1||result.unit!==arg.unit?values.push(arg):result.value=Math.min(result.value,arg.value)}return values.length>1?new CSSMathMin(...values):result}mul(...args){const Constructor=this.constructor,result=new Constructor(this.value,this.unit),values=[];for(let arg of args){if("number"==typeof arg&&(arg=new CSSUnitValue(arg,"number")),!(arg instanceof Constructor))return null;values.length||result.unit!==arg.unit&&"number"!==arg.unit?values.push(arg):result.value*=arg.value}return values.length?new CSSMathProduct(result,...values):result}sub(...args){const Constructor=this.constructor,result=new Constructor(this.value,this.unit),values=[];for(let arg of args){if(!(arg instanceof Constructor))return null;values.length||result.unit!==arg.unit?values.push(new Constructor(-1*arg.value,arg.unit)):result.value-=arg.value}return values.length?new CSSMathSum(result,...values):result}}const _value=new WeakMap,_unit=new WeakMap;class CSSUnitValue extends CSSNumericValue{get value(){return _value.get(this)}set value(newValue){_value.set(this,getFiniteNumber(newValue))}get unit(){return _unit.get(this)}toString(){return`${this.value}${units[this.unit]}`}constructor(...args){if(super(),args.length<2)throw new TypeError(`Failed to construct 'CSSUnitValue': 2 arguments required, but only ${args.length} present.`);_value.set(this,getFiniteNumber(args[0])),_unit.set(this,function(unit){if(!Object.keys(units).includes(unit))throw new TypeError(`Failed to construct 'CSSUnitValue': Invalid unit: ${unit}`);return unit}(args[1]))}}function getFiniteNumber(value){if(isNaN(value)||Math.abs(value)===1/0)throw new TypeError("Failed to set the 'value' property on 'CSSUnitValue': The provided double value is non-finite.");return Number(value)}Object.defineProperties(CSSUnitValue.prototype,{value:{enumerable:!0},unit:{enumerable:!0}});var parseAsValue=string=>{const unitParsingMatch=String(string).match(unitParsingMatcher);if(unitParsingMatch){const[,value,unit]=unitParsingMatch;return new CSSUnitValue(value,unitKeys[unitValues.indexOf(unit||"")])}return new CSSKeywordValue(string)};const unitKeys=Object.keys(units),unitValues=Object.values(units),unitParsingMatcher=new RegExp(`^([-+]?[0-9]*.?[0-9]+)(${unitValues.join("|")})?$`);class CSSStyleValue{constructor(){if("CSSStyleValue"===this.constructor.name)throw new TypeError("Illegal constructor")}static parse(property,cssText){return property.startsWith("--")?void 0:(property.toLowerCase(),parseAsValue(cssText))}static parseAll(property,cssText){}}class CSSUnparsedValue extends CSSStyleValue{constructor(members=[]){if(super(!0),members.length<1)throw new TypeError(`Failed to construct 'CSSUnparsedValue': 1 argument required, but only ${members.length} present.`);this.members=members}*[Symbol.iterator](){yield*this.members}entries(){return this.members.entries()}forEach(callback,thisArg){this.members.forEach(callback,thisArg)}keys(){return this.members.keys()}values(){return this.members.values()}get(index){if(!(index<0||index>=this.length))return this.members[index]}set(index,val){if(index<0||index>=this.length)throw new RangeError(`Failed to set an indexed property on 'CSSUnparsedValue': The index provided (${index}) is outside the range [0, ${this.length-1}].`)}get length(){return this.members.length}}class StylePropertyMap{get(...args){if(args.length<1)throw new TypeError(`Failed to execute 'get' on 'StylePropertyMapReadOnly': 1 argument required, but only ${args.length} present.`);const[property]=args,value=this.style[property];return value?parseAsValue(value):null}set(...args){if(args.length<2)throw new TypeError(`Failed to execute 'set' on 'StylePropertyMap': 2 arguments required, but only ${args.length} present.`);const[property,value]=args;this.style[property]=String(value)}constructor(){throw new TypeError("Illegal constructor")}}function polyfill(window){function defineProperty(prototype,property,getStyle){property in prototype||Object.defineProperty(prototype,property,{configurable:!0,enumerable:!0,get(){const computedStyleMap=Object.create(StylePropertyMap.prototype);return computedStyleMap.style=getStyle(this),computedStyleMap}})}window.CSS||(window.CSS=class{}),Object.keys(units).forEach((unit=>{unit in window.CSS||(window.CSS[unit]=value=>new CSSUnitValue(value,unit))})),defineProperty(window.CSSRule.prototype,"styleMap",(context=>context.style)),defineProperty(window.Element.prototype,"attributeStyleMap",(context=>context.style)),defineProperty(window.Element.prototype,"computedStyleMap",(context=>getComputedStyle(context))),window.CSSKeywordValue||(window.CSSKeywordValue=CSSKeywordValue),window.CSSMathInvert||(window.CSSMathInvert=CSSMathInvert),window.CSSMathMax||(window.CSSMathMax=CSSMathMax),window.CSSMathMin||(window.CSSMathMin=CSSMathMin),window.CSSMathProduct||(window.CSSMathProduct=CSSMathProduct),window.CSSMathSum||(window.CSSMathSum=CSSMathSum),window.CSSStyleValue||(window.CSSStyleValue=CSSStyleValue),window.CSSUnitValue||(window.CSSUnitValue=CSSUnitValue),window.CSSUnparsedValue||(window.CSSUnparsedValue=CSSUnparsedValue),window.StylePropertyMap||(window.StylePropertyMap=StylePropertyMap)}export{CSSKeywordValue,CSSStyleValue,CSSUnitValue,StylePropertyMap,polyfill as default};
