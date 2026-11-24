'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TextSCircle = forwardRef(function TextSCircle(
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
    createElement(Path, {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z","key":"0"}),
    createElement(Path, {"d":"M15 7L10.5 7C9.121 7 8 8.121 8 9.5C8 10.879 9.121 12 10.5 12L13.5 12C14.879 12 16 13.121 16 14.5C16 15.879 14.879 17 13.5 17L9 17","key":"1"})
  );
});

TextSCircle.displayName = 'TextSCircle';

module.exports = TextSCircle;
module.exports.TextSCircle = TextSCircle;
module.exports.default = TextSCircle;
