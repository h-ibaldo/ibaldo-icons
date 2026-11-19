'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const PaperclipPlusShort = forwardRef(function PaperclipPlusShort(
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
    createElement(Path, {"d":"M13 15L19.172 8.828C20.277 7.723 20.277 5.934 19.172 4.828C18.066 3.723 16.277 3.723 15.172 4.828L6.449 13.551C4.516 15.484 4.516 18.617 6.449 20.551C8.383 22.484 11.516 22.484 13.449 20.551L21.895 12.105","key":"0"}),
    createElement(Path, {"d":"M2 5L8 5","key":"1"}),
    createElement(Path, {"d":"M5 2L5 8","key":"2"})
  );
});

PaperclipPlusShort.displayName = 'PaperclipPlusShort';

module.exports = PaperclipPlusShort;
module.exports.PaperclipPlusShort = PaperclipPlusShort;
module.exports.default = PaperclipPlusShort;
