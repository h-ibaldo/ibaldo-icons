'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FlipHorizontal = forwardRef(function FlipHorizontal(
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
    createElement(Path, {"d":"M12 2L12 22","key":"0"}),
    createElement(Path, {"d":"M17 8L17 16L22 12Z","key":"1"}),
    createElement(Path, {"d":"M7 16L7 8L2 12Z","key":"2"})
  );
});

FlipHorizontal.displayName = 'FlipHorizontal';

module.exports = FlipHorizontal;
module.exports.FlipHorizontal = FlipHorizontal;
module.exports.default = FlipHorizontal;
