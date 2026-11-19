'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowUpRightNarrow = forwardRef(function ArrowUpRightNarrow(
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
    createElement(Path, {"d":"M11 6L18 6L18 13","key":"0"}),
    createElement(Path, {"d":"M18 6L6 18","key":"1"})
  );
});

ArrowUpRightNarrow.displayName = 'ArrowUpRightNarrow';

module.exports = ArrowUpRightNarrow;
module.exports.ArrowUpRightNarrow = ArrowUpRightNarrow;
module.exports.default = ArrowUpRightNarrow;
