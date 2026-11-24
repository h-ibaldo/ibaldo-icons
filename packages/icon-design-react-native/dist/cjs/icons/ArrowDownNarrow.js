'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowDownNarrow = forwardRef(function ArrowDownNarrow(
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
    createElement(Path, {"d":"M17 15L12 20L7 15","key":"0"}),
    createElement(Path, {"d":"M12 20L12 4","key":"1"})
  );
});

ArrowDownNarrow.displayName = 'ArrowDownNarrow';

module.exports = ArrowDownNarrow;
module.exports.ArrowDownNarrow = ArrowDownNarrow;
module.exports.default = ArrowDownNarrow;
