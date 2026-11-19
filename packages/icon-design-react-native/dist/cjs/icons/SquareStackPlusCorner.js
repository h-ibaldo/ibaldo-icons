'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const SquareStackPlusCorner = forwardRef(function SquareStackPlusCorner(
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
    createElement(Path, {"d":"M8 11L3.832 11C2.82 11 2 11.82 2 12.832L2 20.168C2 21.18 2.82 22 3.832 22L11.168 22C12.18 22 13 21.18 13 20.168L13 16","key":"0"}),
    createElement(Path, {"d":"M16 5L22 5","key":"1"}),
    createElement(Path, {"d":"M19 2L19 8","key":"2"}),
    createElement(Path, {"d":"M11.668 5L9.832 5C8.82 5 8 5.82 8 6.832L8 14.168C8 15.18 8.82 16 9.832 16L17.168 16C18.18 16 19 15.18 19 14.168L19 12.332","key":"3"})
  );
});

SquareStackPlusCorner.displayName = 'SquareStackPlusCorner';

module.exports = SquareStackPlusCorner;
module.exports.SquareStackPlusCorner = SquareStackPlusCorner;
module.exports.default = SquareStackPlusCorner;
