'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileImageCornerCut = forwardRef(function FileImageCornerCut(
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
    createElement(Path, {"d":"M15 11C15 12.105 14.105 13 13 13C11.895 13 11 12.105 11 11C11 9.895 11.895 9 13 9C14.105 9 15 9.895 15 11Z","key":"0"}),
    createElement(Path, {"d":"M21 21.723C21.595 21.376 22 20.738 22 20L22 7.984C22 7.354 21.75 6.75 21.304 6.304L17.696 2.696C17.25 2.25 16.646 2 16.016 2L8 2C6.895 2 6 2.895 6 4L6 10","key":"1"}),
    createElement(Path, {"d":"M2 22L12 22L7 14L2 22Z","key":"2"}),
    createElement(Path, {"d":"M12 22L17 22L13.5 17L11.057 20.491","key":"3"})
  );
});

FileImageCornerCut.displayName = 'FileImageCornerCut';

module.exports = FileImageCornerCut;
module.exports.FileImageCornerCut = FileImageCornerCut;
module.exports.default = FileImageCornerCut;
