'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TextPCircleOff = forwardRef(function TextPCircleOff(
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
    createElement(Path, {"d":"M2 2L22 22","key":"0"}),
    createElement(Path, {"d":"M4.93 4.93C6.738 3.121 9.238 2 12 2C17.523 2 22 6.477 22 12C22 14.762 20.879 17.262 19.07 19.07M16.117 21.117C14.859 21.684 13.469 22 12 22C6.477 22 2 17.523 2 12C2 10.531 2.316 9.141 2.883 7.883","key":"1"}),
    createElement(Path, {"d":"M9 9L9 7L13 7C14.656 7 16 8.344 16 10C16 11.656 14.656 13 13 13","key":"2"}),
    createElement(Path, {"d":"M9 17.125L9 14","key":"3"})
  );
});

TextPCircleOff.displayName = 'TextPCircleOff';

module.exports = TextPCircleOff;
module.exports.TextPCircleOff = TextPCircleOff;
module.exports.default = TextPCircleOff;
