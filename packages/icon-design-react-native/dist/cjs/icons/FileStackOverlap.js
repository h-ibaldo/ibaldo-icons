'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileStackOverlap = forwardRef(function FileStackOverlap(
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
    createElement(Path, {"d":"M15 20L15 12.828C15 12.298 14.789 11.789 14.414 11.414L10.586 7.586C10.211 7.211 9.702 7 9.172 7L4 7C2.895 7 2 7.895 2 9L2 20C2 21.105 2.895 22 4 22L13 22C14.105 22 15 21.105 15 20Z","key":"0"}),
    createElement(Path, {"d":"M9 7L9 12C9 12.552 9.448 13 10 13L15 13","key":"1"}),
    createElement(Path, {"d":"M18 17L20 17C21.105 17 22 16.105 22 15L22 7.828C22 7.298 21.789 6.789 21.414 6.414L17.586 2.586C17.211 2.211 16.702 2 16.172 2L11 2C9.895 2 9 2.895 9 4","key":"2"}),
    createElement(Path, {"d":"M16 2L16 7C16 7.552 16.448 8 17 8L22 8","key":"3"})
  );
});

FileStackOverlap.displayName = 'FileStackOverlap';

module.exports = FileStackOverlap;
module.exports.FileStackOverlap = FileStackOverlap;
module.exports.default = FileStackOverlap;
