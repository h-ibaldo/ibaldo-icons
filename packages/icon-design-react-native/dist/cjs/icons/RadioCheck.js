'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Polyline } = RNSvg;

const RadioCheck = forwardRef(function RadioCheck(
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
    createElement(Circle, {"cx":"11.974731440099276","cy":"12.000000003885361","r":"10","key":"0"}),
    createElement(Circle, {"cx":"11.974731440099276","cy":"12.000000003885361","r":"6","key":"1"}),
    createElement(Polyline, {"points":"9.974731440099276 12.000000003885361 11.308064773440492 13.333333337217482 13.974731440099276 10.666666670556879","key":"2"})
  );
});

RadioCheck.displayName = 'RadioCheck';

module.exports = RadioCheck;
module.exports.RadioCheck = RadioCheck;
module.exports.default = RadioCheck;
