'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowLeftNarrow = forwardRef(function ArrowLeftNarrow(
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
    createElement(Path, {"d":"M9 7L4 12L9 17","key":"0"}),
    createElement(Path, {"d":"M20 12L4 12","key":"1"})
  );
});

ArrowLeftNarrow.displayName = 'ArrowLeftNarrow';

module.exports = ArrowLeftNarrow;
module.exports.ArrowLeftNarrow = ArrowLeftNarrow;
module.exports.default = ArrowLeftNarrow;
