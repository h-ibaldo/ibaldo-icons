'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TextY = forwardRef(function TextY(
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
    createElement(Path, {"d":"M4 2L12 13L20 2","key":"0"}),
    createElement(Path, {"d":"M12 13L12 22","key":"1"})
  );
});

TextY.displayName = 'TextY';

module.exports = TextY;
module.exports.TextY = TextY;
module.exports.default = TextY;
