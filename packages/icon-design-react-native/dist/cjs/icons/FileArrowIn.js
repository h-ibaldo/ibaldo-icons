'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileArrowIn = forwardRef(function FileArrowIn(
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
    createElement(Path, {"d":"M9 22L12 19L9 16","key":"0"}),
    createElement(Path, {"d":"M4 19L12 19","key":"1"}),
    createElement(Path, {"d":"M4 14L4 4C4 2.895 4.895 2 6 2L14.016 2C14.646 2 15.25 2.25 15.696 2.696L19.304 6.304C19.75 6.75 20 7.354 20 7.984L20 20C20 21.105 19.105 22 18 22L15 22","key":"2"}),
    createElement(Path, {"d":"M14 2L14 7C14 7.552 14.448 8 15 8L20 8","key":"3"})
  );
});

FileArrowIn.displayName = 'FileArrowIn';

module.exports = FileArrowIn;
module.exports.FileArrowIn = FileArrowIn;
module.exports.default = FileArrowIn;
