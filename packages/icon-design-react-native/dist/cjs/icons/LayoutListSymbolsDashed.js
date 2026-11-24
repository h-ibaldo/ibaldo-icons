'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Polygon } = RNSvg;

const LayoutListSymbolsDashed = forwardRef(function LayoutListSymbolsDashed(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
    createElement(Line, {"x1":"9.999999994000973","y1":"3.998779299967282","x2":"13.999999994000973","y2":"3.998779299967282","key":"0"}),
    createElement(Line, {"x1":"9.999999994000973","y1":"11.998779299967282","x2":"13.999999994000973","y2":"11.998779299967282","key":"1"}),
    createElement(Line, {"x1":"9.999999994000973","y1":"19.998779299967282","x2":"13.999999994000973","y2":"19.998779299967282","key":"2"}),
    createElement(Line, {"x1":"17.999999994000973","y1":"3.998779299967282","x2":"21.999999994000973","y2":"3.998779299967282","key":"3"}),
    createElement(Line, {"x1":"17.999999994000973","y1":"11.998779299967282","x2":"21.999999994000973","y2":"11.998779299967282","key":"4"}),
    createElement(Line, {"x1":"17.999999994000973","y1":"19.998779299967282","x2":"21.999999994000973","y2":"19.998779299967282","key":"5"}),
    createElement(Polygon, {"points":"3.999999994000973 1.998779299967282 4.472135948999494 3.526643344965123 5.999999994000973 3.526643344965123 4.763932016499894 4.470915254965803 5.236067971500233 5.998779299967282 3.999999994000973 5.054507389966602 2.763932016510807 5.998779299967282 3.236067971500233 4.470915254965803 1.999999994000973 3.526643344965123 3.527864039000633 3.526643344965123 3.999999994000973 1.998779299967282","key":"6"}),
    createElement(Circle, {"cx":"3.999999994000973","cy":"11.998779299967282","r":"2","key":"7"}),
    createElement(Line, {"x1":"1.999999994019163","y1":"17.998779299967282","x2":"5.999999993910023","y2":"21.998779299967282","key":"8"}),
    createElement(Line, {"x1":"1.999999993930032","y1":"21.998779299876333","x2":"5.999999994000973","y2":"17.998779300058231","key":"9"})
  );
});

LayoutListSymbolsDashed.displayName = 'LayoutListSymbolsDashed';

module.exports = LayoutListSymbolsDashed;
module.exports.LayoutListSymbolsDashed = LayoutListSymbolsDashed;
module.exports.default = LayoutListSymbolsDashed;
