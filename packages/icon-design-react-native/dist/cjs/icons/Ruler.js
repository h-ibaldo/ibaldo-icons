'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const Ruler = forwardRef(function Ruler(
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
    createElement(Path, {"d":"M3 8L21 8C21.551 8 22 8.449 22 9L22 15C22 15.551 21.551 16 21 16L3 16C2.449 16 2 15.551 2 15L2 9C2 8.449 2.449 8 3 8Z","key":"0"}),
    createElement(Path, {"d":"M6 11L6 8","key":"1"}),
    createElement(Path, {"d":"M10 11L10 8","key":"2"}),
    createElement(Path, {"d":"M14 11L14 8","key":"3"}),
    createElement(Path, {"d":"M18 11L18 8","key":"4"})
  );
});

Ruler.displayName = 'Ruler';

module.exports = Ruler;
module.exports.Ruler = Ruler;
module.exports.default = Ruler;
