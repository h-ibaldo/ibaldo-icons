'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileCode = forwardRef(function FileCode(
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
    createElement(Path, {"d":"M6 12L6 3C6 2.449 6.449 2 7 2L15.172 2C15.703 2 16.211 2.211 16.586 2.586L21.414 7.414C21.789 7.789 22 8.297 22 8.828L22 21C22 21.551 21.551 22 21 22L19 22","key":"0"}),
    createElement(Path, {"d":"M15 2L15 8C15 8.551 15.449 9 16 9L22 9","key":"1"}),
    createElement(Path, {"d":"M5 16L2 19L5 22","key":"2"}),
    createElement(Path, {"d":"M13 16L16 19L13 22","key":"3"}),
    createElement(Path, {"d":"M8 22L10 16","key":"4"})
  );
});

FileCode.displayName = 'FileCode';

module.exports = FileCode;
module.exports.FileCode = FileCode;
module.exports.default = FileCode;
