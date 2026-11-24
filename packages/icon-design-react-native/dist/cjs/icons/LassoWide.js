'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LassoWide = forwardRef(function LassoWide(
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
    createElement(Path, {"d":"M7 12C7 10.895 7.895 10 9 10C10.105 10 11 10.895 11 12C11 13.105 10.105 14 9 14C7.895 14 7 13.105 7 12Z","key":"0"}),
    createElement(Path, {"d":"M20 22C20 18.457 16 17 11.34 19.008C7.48 20.672 3 20.457 3 17C3 15.105 5.391 13.613 7.152 12.766","key":"1"}),
    createElement(Path, {"d":"M2 7C2 4.238 6.477 2 12 2C17.523 2 22 4.238 22 7C22 9.762 17.523 12 12 12C11.664 12 11.328 11.992 11 11.977C10.988 10.883 10.098 10 9 10C8.117 10 7.371 10.57 7.105 11.359C4.059 10.504 2 8.871 2 7Z","key":"2"})
  );
});

LassoWide.displayName = 'LassoWide';

module.exports = LassoWide;
module.exports.LassoWide = LassoWide;
module.exports.default = LassoWide;
