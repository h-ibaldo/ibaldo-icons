'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileCheckCorner = forwardRef(function FileCheckCorner(
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
    createElement(Path, {"d":"M15 20L17 22L21 18","key":"0"}),
    createElement(Path, {"d":"M11 22L5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L13.016 2C13.646 2 14.25 2.25 14.696 2.696L18.304 6.304C18.75 6.75 19 7.354 19 7.984L19 14","key":"1"}),
    createElement(Path, {"d":"M13 2L13 7C13 7.552 13.448 8 14 8L19 8","key":"2"})
  );
});

FileCheckCorner.displayName = 'FileCheckCorner';

module.exports = FileCheckCorner;
module.exports.FileCheckCorner = FileCheckCorner;
module.exports.default = FileCheckCorner;
