'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowUpFromBar = forwardRef(function ArrowUpFromBar(
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
    createElement(Path, {"d":"M8 7L12 3L16 7","key":"0"}),
    createElement(Path, {"d":"M17 21L7 21","key":"1"}),
    createElement(Path, {"d":"M12 3L12 21","key":"2"})
  );
});

ArrowUpFromBar.displayName = 'ArrowUpFromBar';

module.exports = ArrowUpFromBar;
module.exports.ArrowUpFromBar = ArrowUpFromBar;
module.exports.default = ArrowUpFromBar;
