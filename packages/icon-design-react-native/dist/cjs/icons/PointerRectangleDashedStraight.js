'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const PointerRectangleDashedStraight = forwardRef(function PointerRectangleDashedStraight(
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
    createElement(Path, {"d":"M2 4L2 3C2 2.445 2.449 2 3 2L4 2","key":"0"}),
    createElement(Path, {"d":"M20 2L21 2C21.551 2 22 2.445 22 3L22 4","key":"1"}),
    createElement(Path, {"d":"M8 2L10 2","key":"2"}),
    createElement(Path, {"d":"M14 2L16 2","key":"3"}),
    createElement(Path, {"d":"M4 16L3 16C2.449 16 2 15.555 2 15L2 14","key":"4"}),
    createElement(Path, {"d":"M20 16L21 16C21.551 16 22 15.555 22 15L22 14","key":"5"}),
    createElement(Path, {"d":"M2 10L2 8","key":"6"}),
    createElement(Path, {"d":"M22 10L22 8","key":"7"}),
    createElement(Path, {"d":"M7.973 10.754L7.973 21.305C7.973 21.922 8.719 22.23 9.156 21.797L12.129 18.82L16.305 18.82C16.93 18.82 17.234 18.063 16.785 17.629L9.148 10.254C8.707 9.828 7.973 10.141 7.973 10.754Z","key":"8"})
  );
});

PointerRectangleDashedStraight.displayName = 'PointerRectangleDashedStraight';

module.exports = PointerRectangleDashedStraight;
module.exports.PointerRectangleDashedStraight = PointerRectangleDashedStraight;
module.exports.default = PointerRectangleDashedStraight;
