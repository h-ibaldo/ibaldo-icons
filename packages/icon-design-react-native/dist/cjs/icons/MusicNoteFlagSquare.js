'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Ellipse, Polyline } = RNSvg;

const MusicNoteFlagSquare = forwardRef(function MusicNoteFlagSquare(
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
    createElement(Ellipse, {"cx":"8","cy":"18.499999999998181","rx":"4","ry":"3.5","key":"0"}),
    createElement(Polyline, {"points":"12 6.999999999998181 20 6.999999999998181 20 1.999999999998181 12 1.999999999998181 12 17.999999999998181","key":"1"})
  );
});

MusicNoteFlagSquare.displayName = 'MusicNoteFlagSquare';

module.exports = MusicNoteFlagSquare;
module.exports.MusicNoteFlagSquare = MusicNoteFlagSquare;
module.exports.default = MusicNoteFlagSquare;
