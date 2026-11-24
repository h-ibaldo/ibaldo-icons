'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FilePaperclipHorizontalCut = forwardRef(function FilePaperclipHorizontalCut(
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
    createElement(Path, {"d":"M20 12L20 4C20 2.895 19.105 2 18 2L9.984 2C9.354 2 8.75 2.25 8.304 2.696L4.696 6.304C4.25 6.75 4 7.354 4 7.984L4 20C4 21.105 4.895 22 6 22L8 22","key":"0"}),
    createElement(Path, {"d":"M19 22L14 22C12.343 22 11 20.657 11 19L11 19C11 17.343 12.343 16 14 16L20.5 16C21.328 16 22 16.672 22 17.5L22 17.5C22 18.328 21.328 19 20.5 19L16 19","key":"1"})
  );
});

FilePaperclipHorizontalCut.displayName = 'FilePaperclipHorizontalCut';

module.exports = FilePaperclipHorizontalCut;
module.exports.FilePaperclipHorizontalCut = FilePaperclipHorizontalCut;
module.exports.default = FilePaperclipHorizontalCut;
