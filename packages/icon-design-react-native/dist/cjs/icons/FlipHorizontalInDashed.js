'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FlipHorizontalInDashed = forwardRef(function FlipHorizontalInDashed(
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
    createElement(Path, {"d":"M12 22L12 20","key":"0"}),
    createElement(Path, {"d":"M12 16L12 14","key":"1"}),
    createElement(Path, {"d":"M12 10L12 8","key":"2"}),
    createElement(Path, {"d":"M12 4L12 2","key":"3"}),
    createElement(Path, {"d":"M2 8L2 16L7 12Z","key":"4"}),
    createElement(Path, {"d":"M22 16L22 8L17 12Z","key":"5"})
  );
});

FlipHorizontalInDashed.displayName = 'FlipHorizontalInDashed';

module.exports = FlipHorizontalInDashed;
module.exports.FlipHorizontalInDashed = FlipHorizontalInDashed;
module.exports.default = FlipHorizontalInDashed;
