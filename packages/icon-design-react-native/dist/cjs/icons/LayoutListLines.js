'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LayoutListLines = forwardRef(function LayoutListLines(
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
    createElement(Path, {"d":"M22 2L14 2","key":"0"}),
    createElement(Path, {"d":"M22 7L14 7","key":"1"}),
    createElement(Path, {"d":"M22 12L14 12","key":"2"}),
    createElement(Path, {"d":"M22 17L14 17","key":"3"}),
    createElement(Path, {"d":"M22 22L14 22","key":"4"}),
    createElement(Path, {"d":"M2 9L2 3C2 2.449 2.449 2 3 2L9 2C9.551 2 10 2.449 10 3L10 9C10 9.551 9.551 10 9 10L3 10C2.449 10 2 9.551 2 9Z","key":"5"}),
    createElement(Path, {"d":"M2 21L2 15C2 14.449 2.449 14 3 14L9 14C9.551 14 10 14.449 10 15L10 21C10 21.551 9.551 22 9 22L3 22C2.449 22 2 21.551 2 21Z","key":"6"})
  );
});

LayoutListLines.displayName = 'LayoutListLines';

module.exports = LayoutListLines;
module.exports.LayoutListLines = LayoutListLines;
module.exports.default = LayoutListLines;
