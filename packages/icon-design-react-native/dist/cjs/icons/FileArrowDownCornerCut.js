'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileArrowDownCornerCut = forwardRef(function FileArrowDownCornerCut(
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
    createElement(Path, {"d":"M16 19L19 22L22 19","key":"0"}),
    createElement(Path, {"d":"M19 16L19 22","key":"1"}),
    createElement(Path, {"d":"M19 12L19 7.828C19 7.298 18.789 6.789 18.414 6.414L14.586 2.586C14.211 2.211 13.702 2 13.172 2L5 2C3.895 2 3 2.895 3 4L3 20C3 21.105 3.895 22 5 22L13 22","key":"2"})
  );
});

FileArrowDownCornerCut.displayName = 'FileArrowDownCornerCut';

module.exports = FileArrowDownCornerCut;
module.exports.FileArrowDownCornerCut = FileArrowDownCornerCut;
module.exports.default = FileArrowDownCornerCut;
