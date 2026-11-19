'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowDownLeftNarrow = forwardRef(function ArrowDownLeftNarrow(
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
    createElement(Path, {"d":"M13 18L6 18L6 11","key":"0"}),
    createElement(Path, {"d":"M6 18L18 6","key":"1"})
  );
});

ArrowDownLeftNarrow.displayName = 'ArrowDownLeftNarrow';

module.exports = ArrowDownLeftNarrow;
module.exports.ArrowDownLeftNarrow = ArrowDownLeftNarrow;
module.exports.default = ArrowDownLeftNarrow;
