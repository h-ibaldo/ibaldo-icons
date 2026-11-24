'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Path, Polyline } = RNSvg;

const LockEyeRound = forwardRef(function LockEyeRound(
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
    createElement(Path, {"d":"M6.999999990599463,10v-3c0-2.761420987731981,2.238574012270874-5,4.999995000000126-5l.000010000000657.000004999998055c2.761420987729252,0,4.999994999999217,2.238574012269964,4.999994999999217,4.999995000001945v3","key":"0"}),
    createElement(Circle, {"cx":"11.999999990599463","cy":"15","r":"7.000000000000001","key":"1"}),
    createElement(Circle, {"cx":"11.999999990599463","cy":"14.999999999999091","r":"2.999999999999545","key":"2"}),
    createElement(Polyline, {"points":"12.999999990599463 12.1837158203125 12.999999990599463 14 14.816284170299696 14","key":"3"})
  );
});

LockEyeRound.displayName = 'LockEyeRound';

module.exports = LockEyeRound;
module.exports.LockEyeRound = LockEyeRound;
module.exports.default = LockEyeRound;
