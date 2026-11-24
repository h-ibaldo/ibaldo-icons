'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileGridCut = forwardRef(function FileGridCut(
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
    createElement(Path, {"d":"M19 9L19 7.828C19 7.297 18.789 6.789 18.414 6.414L14.586 2.586C14.211 2.211 13.703 2 13.172 2L5 2C3.895 2 3 2.895 3 4L3 20C3 21.105 3.895 22 5 22L6 22","key":"0"}),
    createElement(Path, {"d":"M9 12L21 12L21 22L9 22Z","key":"1"}),
    createElement(Path, {"d":"M9 17L21 17","key":"2"}),
    createElement(Path, {"d":"M17 12L17 21.5","key":"3"}),
    createElement(Path, {"d":"M13 12L13 21.5","key":"4"})
  );
});

FileGridCut.displayName = 'FileGridCut';

module.exports = FileGridCut;
module.exports.FileGridCut = FileGridCut;
module.exports.default = FileGridCut;
