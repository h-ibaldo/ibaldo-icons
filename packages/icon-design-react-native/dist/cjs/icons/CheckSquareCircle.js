'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Polyline, Rect } = RNSvg;

const CheckSquareCircle = forwardRef(function CheckSquareCircle(
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
    createElement(Circle, {"cx":"11.999999981180736","cy":"11.999996564258254","r":"10","key":"0"}),
    createElement(Rect, {"x":"6.999999981180736","y":"6.999996564258254","width":"10","height":"10","key":"1"}),
    createElement(Polyline, {"points":"9.999999981180736 11.999996564258254 10.999999981180736 13.499996564258254 13.999999981180736 10.999996564258254","key":"2"})
  );
});

CheckSquareCircle.displayName = 'CheckSquareCircle';

module.exports = CheckSquareCircle;
module.exports.CheckSquareCircle = CheckSquareCircle;
module.exports.default = CheckSquareCircle;
