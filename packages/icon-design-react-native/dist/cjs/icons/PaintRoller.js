'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const PaintRoller = forwardRef(function PaintRoller(
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
    createElement(Path, {"d":"M5 2L21 2L21 8L5 8Z","key":"0"}),
    createElement(Path, {"d":"M11 16L15 16L15 22L11 22Z","key":"1"}),
    createElement(Path, {"d":"M5 5L4 5C2.895 5 2 5.895 2 7L2 9.391C2 10.363 2.699 11.195 3.656 11.359L11.344 12.711C12.301 12.879 13 13.707 13 14.68L13 16","key":"2"})
  );
});

PaintRoller.displayName = 'PaintRoller';

module.exports = PaintRoller;
module.exports.PaintRoller = PaintRoller;
module.exports.default = PaintRoller;
