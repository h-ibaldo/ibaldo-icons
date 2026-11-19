'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowUpLeftNarrow = forwardRef(function ArrowUpLeftNarrow(
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
    createElement(Path, {"d":"M6 13L6 6L13 6","key":"0"}),
    createElement(Path, {"d":"M6 6L18 18","key":"1"})
  );
});

ArrowUpLeftNarrow.displayName = 'ArrowUpLeftNarrow';

module.exports = ArrowUpLeftNarrow;
module.exports.ArrowUpLeftNarrow = ArrowUpLeftNarrow;
module.exports.default = ArrowUpLeftNarrow;
