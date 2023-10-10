import units from "./units.js";
import { cssStyleValueCreator } from "./CSSStyleValue.js";
import CSSUnitValue from "./CSSUnitValue.js";
import CSSKeywordValue from "./CSSKeywordValue.js";

/**
 * @todo Handle the remaining CSSStyleValue subclasses
 * @see {@link https://drafts.css-houdini.org/css-typed-om/#stylevalue-subclasses}
 * - Needed: CSSNumericValue, CSSMathValue, CSSTransformValue, CSSImageValue, CSSColorValue
 */
export default function parseCSSText(cssText) {
  const isKeywordValue = keywordValues.includes(cssText);
  if (isKeywordValue) {
    return new CSSKeywordValue(cssText);
  }

  const isUnitValue = String(cssText).match(unitParsingMatcher);
  if (isUnitValue) {
    const [, value, unit] = isUnitValue;
    return new CSSUnitValue(value, unitKeys[unitValues.indexOf(unit || "")]);
  }

  return cssStyleValueCreator(cssText);
}

const unitKeys = Object.keys(units);
const unitValues = Object.values(units);
const unitParsingMatcher = new RegExp(
  `^([-+]?[0-9]*.?[0-9]+)(${unitValues.join("|")})?$`,
);

const keywordValues = [
  "absolute",
  "auto",
  "block",
  "bold",
  "bolder",
  "border-box",
  "both",
  "bottom",
  "capitalize",
  "center",
  "circle",
  "col-resize",
  "collapse",
  "column",
  "column-reverse",
  "contain",
  "content-box",
  "cover",
  "crosshair",
  "dashed",
  "default",
  "dotted",
  "double",
  "e-resize",
  "ellipsis",
  "fixed",
  "flex",
  "flex-end",
  "flex-start",
  "grid",
  "groove",
  "hidden",
  "hide",
  "inherit",
  "initial",
  "inline",
  "inline-block",
  "inline-flex",
  "inline-grid",
  "inline-table",
  "inset",
  "italic",
  "justify",
  "left",
  "lighter",
  "line-through",
  "list-item",
  "lowercase",
  "ltr",
  "middle",
  "move",
  "n-resize",
  "ne-resize",
  "none",
  "normal",
  "nowrap",
  "nw-resize",
  "oblique",
  "outset",
  "overline",
  "pointer",
  "relative",
  "repeat",
  "repeat-x",
  "repeat-y",
  "revert",
  "ridge",
  "right",
  "row",
  "row-resize",
  "row-reverse",
  "rtl",
  "run-in",
  "s-resize",
  "scroll",
  "se-resize",
  "separate",
  "show",
  "solid",
  "space-around",
  "space-between",
  "space-evenly",
  "square",
  "static",
  "sticky",
  "stretch",
  "sw-resize",
  "table",
  "table-caption",
  "table-cell",
  "table-column",
  "table-column-group",
  "table-footer-group",
  "table-header-group",
  "table-row",
  "table-row-group",
  "text",
  "top",
  "underline",
  "unset",
  "uppercase",
  "vertical-text",
  "visible",
  "w-resize",
  "wait",
  "wrap",
  "wrap-reverse",
];
