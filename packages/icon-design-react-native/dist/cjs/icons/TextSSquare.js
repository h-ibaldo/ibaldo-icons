'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TextSSquare = forwardRef(function TextSSquare(
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
    createElement(Path, {"d":"M15 7L10.5 7C9.121 7 8 8.121 8 9.5C8 10.879 9.121 12 10.5 12L13.5 12C14.879 12 16 13.121 16 14.5C16 15.879 14.879 17 13.5 17L9 17","key":"0"}),
    createElement(Path, {"d":"M5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2Z","key":"1"})
  );
});

TextSSquare.displayName = 'TextSSquare';

module.exports = TextSSquare;
module.exports.TextSSquare = TextSSquare;
module.exports.default = TextSSquare;
