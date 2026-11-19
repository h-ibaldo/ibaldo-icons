'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Polygon, Rect } = RNSvg;

const LayoutGridShapes = forwardRef(function LayoutGridShapes(
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
    createElement(Rect, {"x":"1.999999991464847","y":"1.998779303665287","width":"20","height":"19.999999999998181","rx":".999999999999434","ry":".999999999999434","transform":"translate(23.999999982333101 23.997558607925406) rotate(-180)","key":"0"}),
    createElement(Line, {"x1":"11.999999993639904","y1":"1.998779299956368","x2":"11.999999993639904","y2":"21.998779299956368","key":"1"}),
    createElement(Line, {"x1":"21.999999993639904","y1":"11.998779299956368","x2":"1.999999993639904","y2":"11.998779299956368","key":"2"}),
    createElement(Rect, {"x":"5.999999993639904","y":"5.998779299956368","width":"2","height":"2","key":"3"}),
    createElement(Polygon, {"points":"15.499999993639904 7.998779299956368 18.499999993639904 7.998779299956368 16.999999993639904 5.498779299956368 15.499999993639904 7.998779299956368","key":"4"}),
    createElement(Circle, {"cx":"16.999999993639904","cy":"16.998779299956368","r":"1","key":"5"}),
    createElement(Line, {"x1":"6.999999993639904","y1":"14.998779299956368","x2":"6.999999993639904","y2":"18.998779299956368","key":"6"}),
    createElement(Line, {"x1":"8.999999993639904","y1":"16.998779299956368","x2":"4.999999993639904","y2":"16.998779299956368","key":"7"})
  );
});

LayoutGridShapes.displayName = 'LayoutGridShapes';

module.exports = LayoutGridShapes;
module.exports.LayoutGridShapes = LayoutGridShapes;
module.exports.default = LayoutGridShapes;
