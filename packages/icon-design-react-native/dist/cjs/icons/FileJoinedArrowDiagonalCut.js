'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileJoinedArrowDiagonalCut = forwardRef(function FileJoinedArrowDiagonalCut(
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
    createElement(Path, {"d":"M13 8L16 8L16 11","key":"0"}),
    createElement(Path, {"d":"M8 13L8 16L11 16","key":"1"}),
    createElement(Path, {"d":"M11 13","key":"2"}),
    createElement(Path, {"d":"M16 8L9 15","key":"3"}),
    createElement(Path, {"d":"M15 16L20 16C21.105 16 22 15.105 22 14L22 5.828C22 5.298 21.789 4.789 21.414 4.414L19.586 2.586C19.211 2.211 18.702 2 18.172 2L11 2C9.895 2 9 2.895 9 4L9 8","key":"4"}),
    createElement(Path, {"d":"M9 8L4 8C2.895 8 2 8.895 2 10L2 20C2 21.105 2.895 22 4 22L13 22C14.105 22 15 21.105 15 20L15 16","key":"5"})
  );
});

FileJoinedArrowDiagonalCut.displayName = 'FileJoinedArrowDiagonalCut';

module.exports = FileJoinedArrowDiagonalCut;
module.exports.FileJoinedArrowDiagonalCut = FileJoinedArrowDiagonalCut;
module.exports.default = FileJoinedArrowDiagonalCut;
