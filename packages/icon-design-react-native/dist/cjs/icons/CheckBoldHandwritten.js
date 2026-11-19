'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Polygon } = RNSvg;

const CheckBoldHandwritten = forwardRef(function CheckBoldHandwritten(
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
    createElement(Polygon, {"points":"1.949462885140747 11.000000000480213 5.949462885140747 9.000000000480213 8.949462885140747 14.000000000480213 18.949462885140747 5.000000000480213 21.949462885140747 6.000000000480213 9.949460815629209 19.000000000480213 7.949462885140747 19.000000000480213 1.949462885140747 11.000000000480213","key":"0"})
  );
});

CheckBoldHandwritten.displayName = 'CheckBoldHandwritten';

module.exports = CheckBoldHandwritten;
module.exports.CheckBoldHandwritten = CheckBoldHandwritten;
module.exports.default = CheckBoldHandwritten;
