'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileArrowOut = forwardRef(function FileArrowOut(
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
    createElement(Path, {"d":"M17 22L20 19L17 16","key":"0"}),
    createElement(Path, {"d":"M12 19L20 19","key":"1"}),
    createElement(Path, {"d":"M20 13L20 7.984C20 7.354 19.75 6.75 19.304 6.304L15.696 2.696C15.25 2.25 14.646 2 14.016 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L9 22","key":"2"}),
    createElement(Path, {"d":"M14 2L14 7C14 7.552 14.448 8 15 8L20 8","key":"3"})
  );
});

FileArrowOut.displayName = 'FileArrowOut';

module.exports = FileArrowOut;
module.exports.FileArrowOut = FileArrowOut;
module.exports.default = FileArrowOut;
