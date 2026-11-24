'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const MagnetRight = forwardRef(function MagnetRight(
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
    createElement(Path, {"d":"M17 22L17 15","key":"0"}),
    createElement(Path, {"d":"M17 9L17 2","key":"1"}),
    createElement(Path, {"d":"M22 22L12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2L22 2L22 9L12 9C10.344 9 9 10.344 9 12C9 13.656 10.344 15 12 15L22 15Z","key":"2"})
  );
});

MagnetRight.displayName = 'MagnetRight';

module.exports = MagnetRight;
module.exports.MagnetRight = MagnetRight;
module.exports.default = MagnetRight;
