'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ImagePaperclip = forwardRef(function ImagePaperclip(
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
    createElement(Path, {"d":"M8 11L6.5 11C4.016 11 2 8.984 2 6.5C2 4.016 4.016 2 6.5 2L16 2C17.656 2 19 3.344 19 5C19 6.656 17.656 8 16 8L8.5 8C7.672 8 7 7.328 7 6.5C7 5.672 7.672 5 8.5 5L13 5","key":"0"}),
    createElement(Path, {"d":"M22 19.949C22 21.082 21.082 22 19.949 22","key":"1"}),
    createElement(Path, {"d":"M19.789 22L13.211 22C11.988 22 11 21.012 11 19.789L11 13.211C11 11.988 11.988 11 13.211 11L19.789 11C21.012 11 22 11.988 22 13.211L22 19.789C22 21.012 21.012 22 19.789 22Z","key":"2"}),
    createElement(Path, {"d":"M16 22C16 18.688 18.688 16 22 16","key":"3"}),
    createElement(Path, {"d":"M15 15L15 15","key":"4"})
  );
});

ImagePaperclip.displayName = 'ImagePaperclip';

module.exports = ImagePaperclip;
module.exports.ImagePaperclip = ImagePaperclip;
module.exports.default = ImagePaperclip;
