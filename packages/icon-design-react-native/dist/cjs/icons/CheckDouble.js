'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polyline } = RNSvg;

const CheckDouble = forwardRef(function CheckDouble(
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
    createElement(Polyline, {"points":"7.974731440090181 11.000000003874447 12.974731440090181 17.000000003874447 20.974731440090181 7.000000003874447","key":"0"}),
    createElement(Polyline, {"points":"2.974731440090181 11.000000003874447 7.974731440090181 17.000000003874447 10.423706049479733 13.938781742155697","key":"1"}),
    createElement(Line, {"x1":"12.709411615869612","y1":"11.081604007787973","x2":"15.974731440090181","y2":"7.000000003874447","key":"2"})
  );
});

CheckDouble.displayName = 'CheckDouble';

module.exports = CheckDouble;
module.exports.CheckDouble = CheckDouble;
module.exports.default = CheckDouble;
