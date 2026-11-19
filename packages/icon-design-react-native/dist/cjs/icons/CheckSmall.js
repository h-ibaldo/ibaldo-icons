'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Polyline } = RNSvg;

const CheckSmall = forwardRef(function CheckSmall(
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
    createElement(Polyline, {"points":"6.974731440080177 13.000000003874447 9.974731440080177 16.000000003874447 16.974731440080177 8.000000003874447","key":"0"})
  );
});

CheckSmall.displayName = 'CheckSmall';

module.exports = CheckSmall;
module.exports.CheckSmall = CheckSmall;
module.exports.default = CheckSmall;
