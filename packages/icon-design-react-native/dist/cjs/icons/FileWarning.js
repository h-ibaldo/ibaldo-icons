'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileWarning = forwardRef(function FileWarning(
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
    createElement(Path, {"d":"M18 8L18 4C18 2.895 17.105 2 16 2L7.984 2C7.354 2 6.75 2.25 6.304 2.696L2.696 6.304C2.25 6.75 2 7.354 2 7.984L2 20C2 21.105 2.895 22 4 22L5 22","key":"0"}),
    createElement(Path, {"d":"M8 2L8 7C8 7.552 7.552 8 7 8L2 8","key":"1"}),
    createElement(Path, {"d":"M15 15L15 16","key":"2"}),
    createElement(Path, {"d":"M15 19L15 19","key":"3"}),
    createElement(Path, {"d":"M10.446 22L19.554 22C21.089 22 22.052 20.341 21.29 19.008L17.134 11.734C16.19 10.083 13.81 10.083 12.866 11.734L8.71 19.008C7.948 20.341 8.911 22 10.446 22Z","key":"4"})
  );
});

FileWarning.displayName = 'FileWarning';

module.exports = FileWarning;
module.exports.FileWarning = FileWarning;
module.exports.default = FileWarning;
