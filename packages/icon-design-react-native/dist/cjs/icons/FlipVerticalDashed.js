'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FlipVerticalDashed = forwardRef(function FlipVerticalDashed(
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
    createElement(Path, {"d":"M2 12L4 12","key":"0"}),
    createElement(Path, {"d":"M8 12L10 12","key":"1"}),
    createElement(Path, {"d":"M14 12L16 12","key":"2"}),
    createElement(Path, {"d":"M20 12L22 12","key":"3"}),
    createElement(Path, {"d":"M8 7L16 7L12 2Z","key":"4"}),
    createElement(Path, {"d":"M16 17L8 17L12 22Z","key":"5"})
  );
});

FlipVerticalDashed.displayName = 'FlipVerticalDashed';

module.exports = FlipVerticalDashed;
module.exports.FlipVerticalDashed = FlipVerticalDashed;
module.exports.default = FlipVerticalDashed;
