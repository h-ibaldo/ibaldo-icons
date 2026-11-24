'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ClipboardImageLarge = forwardRef(function ClipboardImageLarge(
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
    createElement(Path, {"d":"M11 20L5 20C3.895 20 3 19.105 3 18L3 6C3 4.895 3.895 4 5 4L7 4","key":"0"}),
    createElement(Path, {"d":"M15 4L17 4C18.105 4 19 4.895 19 6L19 11","key":"1"}),
    createElement(Path, {"d":"M13.883 7L8.117 7C7.5 7 7 6.5 7 5.883L7 3.117C7 2.5 7.5 2 8.117 2L13.883 2C14.5 2 15 2.5 15 3.117L15 5.883C15 6.5 14.5 7 13.883 7Z","key":"2"}),
    createElement(Path, {"d":"M22 19.949C22 21.082 21.082 22 19.949 22","key":"3"}),
    createElement(Path, {"d":"M19.789 22L13.211 22C11.988 22 11 21.012 11 19.789L11 13.211C11 11.988 11.988 11 13.211 11L19.789 11C21.012 11 22 11.988 22 13.211L22 19.789C22 21.012 21.012 22 19.789 22Z","key":"4"}),
    createElement(Path, {"d":"M16 22C16 18.688 18.688 16 22 16","key":"5"}),
    createElement(Path, {"d":"M15 15L15 15","key":"6"})
  );
});

ClipboardImageLarge.displayName = 'ClipboardImageLarge';

module.exports = ClipboardImageLarge;
module.exports.ClipboardImageLarge = ClipboardImageLarge;
module.exports.default = ClipboardImageLarge;
