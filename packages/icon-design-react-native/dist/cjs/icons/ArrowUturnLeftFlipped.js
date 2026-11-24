'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowUturnLeftFlipped = forwardRef(function ArrowUturnLeftFlipped(
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
    createElement(Path, {"d":"M7 12L3 16L7 20","key":"0"}),
    createElement(Path, {"d":"M3 16L15 16C18.313 16 21 13.313 21 10C21 6.688 18.313 4 15 4L12 4","key":"1"})
  );
});

ArrowUturnLeftFlipped.displayName = 'ArrowUturnLeftFlipped';

module.exports = ArrowUturnLeftFlipped;
module.exports.ArrowUturnLeftFlipped = ArrowUturnLeftFlipped;
module.exports.default = ArrowUturnLeftFlipped;
