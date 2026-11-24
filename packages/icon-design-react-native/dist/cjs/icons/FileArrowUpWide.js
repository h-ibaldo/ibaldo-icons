'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileArrowUpWide = forwardRef(function FileArrowUpWide(
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
    createElement(Path, {"d":"M22 20L22 7.828C22 7.297 21.789 6.789 21.414 6.414L17.586 2.586C17.211 2.211 16.703 2 16.172 2L4 2C2.895 2 2 2.895 2 4L2 20C2 21.105 2.895 22 4 22L20 22C21.105 22 22 21.105 22 20Z","key":"0"}),
    createElement(Path, {"d":"M16 2L16 7C16 7.551 16.449 8 17 8L22 8","key":"1"}),
    createElement(Path, {"d":"M12 16L12 9","key":"2"}),
    createElement(Path, {"d":"M9 12L12 9L15 12","key":"3"})
  );
});

FileArrowUpWide.displayName = 'FileArrowUpWide';

module.exports = FileArrowUpWide;
module.exports.FileArrowUpWide = FileArrowUpWide;
module.exports.default = FileArrowUpWide;
