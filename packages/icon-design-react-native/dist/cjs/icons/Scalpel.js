'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const Scalpel = forwardRef(function Scalpel(
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
    createElement(Path, {"d":"M15 15L13 17L12 20L2 22L12 12","key":"0"}),
    createElement(Path, {"d":"M20 2L11 11L16 16L22 10","key":"1"}),
    createElement(Path, {"d":"M13 9L18 14","key":"2"})
  );
});

Scalpel.displayName = 'Scalpel';

module.exports = Scalpel;
module.exports.Scalpel = Scalpel;
module.exports.default = Scalpel;
