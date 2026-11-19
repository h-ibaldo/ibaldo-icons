'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileBracketsRight = forwardRef(function FileBracketsRight(
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
    createElement(Path, {"d":"M20 13L20 8.828C20 8.297 19.789 7.789 19.414 7.414L14.586 2.586C14.211 2.211 13.703 2 13.172 2L5 2C4.449 2 4 2.449 4 3L4 21C4 21.551 4.449 22 5 22L7 22","key":"0"}),
    createElement(Path, {"d":"M13 2L13 8C13 8.551 13.449 9 14 9L20 9","key":"1"}),
    createElement(Path, {"d":"M13 16L10 19L13 22","key":"2"}),
    createElement(Path, {"d":"M18 16L21 19L18 22","key":"3"})
  );
});

FileBracketsRight.displayName = 'FileBracketsRight';

module.exports = FileBracketsRight;
module.exports.FileBracketsRight = FileBracketsRight;
module.exports.default = FileBracketsRight;
