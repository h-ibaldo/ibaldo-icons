'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Polyline } = RNSvg;

const CheckTall = forwardRef(function CheckTall(
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
    createElement(Polyline, {"points":"4.974731440080177 13.000000003874447 9.474731440080177 19.000000003874447 18.974731440080177 5.000000003874447","key":"0"})
  );
});

CheckTall.displayName = 'CheckTall';

module.exports = CheckTall;
module.exports.CheckTall = CheckTall;
module.exports.default = CheckTall;
