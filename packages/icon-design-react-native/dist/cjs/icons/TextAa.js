'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TextAa = forwardRef(function TextAa(
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
    createElement(Path, {"d":"M2 22L5.902 2.492C5.961 2.207 6.211 2 6.5 2C6.789 2 7.039 2.207 7.098 2.492L11 22","key":"0"}),
    createElement(Path, {"d":"M3.602 14L9.398 14","key":"1"}),
    createElement(Path, {"d":"M16 8L16.387 7.805C17.387 7.309 18.574 7.383 19.5 8C20.438 8.625 21 9.676 21 10.805L21 20L22 22","key":"2"}),
    createElement(Path, {"d":"M21 13L17.473 14.176C15.996 14.668 15 16.051 15 17.609L15 19.234C15 20.762 16.238 22 17.766 22C19.133 22 20.387 21.227 21 20","key":"3"})
  );
});

TextAa.displayName = 'TextAa';

module.exports = TextAa;
module.exports.TextAa = TextAa;
module.exports.default = TextAa;
