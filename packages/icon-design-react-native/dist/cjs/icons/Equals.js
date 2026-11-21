'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const Equals = forwardRef(function Equals(
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
    createElement(Path, {"d":"M6 9L18 9","key":"0"}),
    createElement(Path, {"d":"M6 15L18 15","key":"1"})
  );
});

Equals.displayName = 'Equals';

module.exports = Equals;
module.exports.Equals = Equals;
module.exports.default = Equals;
