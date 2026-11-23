'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TextCaseLower = forwardRef(function TextCaseLower(
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
    createElement(Path, {"d":"M4 8L4.387 7.805C5.387 7.309 6.574 7.383 7.5 8C8.438 8.625 9 9.676 9 10.805L9 20L10 22","key":"0"}),
    createElement(Path, {"d":"M9 13L5.473 14.176C3.996 14.668 3 16.051 3 17.609L3 19.234C3 20.762 4.238 22 5.766 22C7.133 22 8.387 21.227 9 20","key":"1"}),
    createElement(Path, {"d":"M14 2L14 22","key":"2"}),
    createElement(Path, {"d":"M14 14.5C14 9 15.566 7 17.5 7C19.434 7 21 8 21 14.5C21 20 19.434 22 17.5 22C15.566 22 14 20 14 14.5Z","key":"3"})
  );
});

TextCaseLower.displayName = 'TextCaseLower';

module.exports = TextCaseLower;
module.exports.TextCaseLower = TextCaseLower;
module.exports.default = TextCaseLower;
