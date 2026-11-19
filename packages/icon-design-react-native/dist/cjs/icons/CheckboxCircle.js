'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle } = RNSvg;

const CheckboxCircle = forwardRef(function CheckboxCircle(
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
    createElement(Circle, {"cx":"11.949462885140747","cy":"12.000000000480213","r":"10","key":"0"})
  );
});

CheckboxCircle.displayName = 'CheckboxCircle';

module.exports = CheckboxCircle;
module.exports.CheckboxCircle = CheckboxCircle;
module.exports.default = CheckboxCircle;
