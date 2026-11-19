'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TextAaSquare = forwardRef(function TextAaSquare(
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
    createElement(Path, {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22Z","key":"0"}),
    createElement(Path, {"d":"M5 16L7.875 8L11 16","key":"1"}),
    createElement(Path, {"d":"M18 13.5C18 14.883 16.883 16 15.5 16C14.117 16 13 14.883 13 13.5C13 12.117 14.117 11 15.5 11C16.883 11 18 12.117 18 13.5Z","key":"2"}),
    createElement(Path, {"d":"M18 11L18 16","key":"3"}),
    createElement(Path, {"d":"M6 14L10 14","key":"4"})
  );
});

TextAaSquare.displayName = 'TextAaSquare';

module.exports = TextAaSquare;
module.exports.TextAaSquare = TextAaSquare;
module.exports.default = TextAaSquare;
