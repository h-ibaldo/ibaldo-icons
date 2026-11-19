'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const File = forwardRef(function File(
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
    createElement(Path, {"d":"M20 20L20 7.828C20 7.297 19.789 6.789 19.414 6.414L15.586 2.586C15.211 2.211 14.703 2 14.172 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L18 22C19.105 22 20 21.105 20 20Z","key":"0"}),
    createElement(Path, {"d":"M14 2L14 7C14 7.551 14.449 8 15 8L20 8","key":"1"})
  );
});

File.displayName = 'File';

module.exports = File;
module.exports.File = File;
module.exports.default = File;
