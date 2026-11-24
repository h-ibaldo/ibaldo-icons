'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileXCornerWide = forwardRef(function FileXCornerWide(
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
    createElement(Path, {"d":"M2 13L2 4C2 2.895 2.895 2 4 2L14.918 2L22 9L22 20C22 21.105 21.105 22 20 22L11 22","key":"0"}),
    createElement(Path, {"d":"M22 10L16 10C14.895 10 14 9.105 14 8L14 2","key":"1"}),
    createElement(Path, {"d":"M2 17L7 22","key":"2"}),
    createElement(Path, {"d":"M7 17L2 22","key":"3"})
  );
});

FileXCornerWide.displayName = 'FileXCornerWide';

module.exports = FileXCornerWide;
module.exports.FileXCornerWide = FileXCornerWide;
module.exports.default = FileXCornerWide;
