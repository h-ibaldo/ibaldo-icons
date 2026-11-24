'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileWide = forwardRef(function FileWide(
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
    createElement(Path, {"d":"M22 9L22 20C22 21.105 21.105 22 20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L14.918 2Z","key":"0"}),
    createElement(Path, {"d":"M22 10L16 10C14.895 10 14 9.105 14 8L14 2","key":"1"})
  );
});

FileWide.displayName = 'FileWide';

module.exports = FileWide;
module.exports.FileWide = FileWide;
module.exports.default = FileWide;
