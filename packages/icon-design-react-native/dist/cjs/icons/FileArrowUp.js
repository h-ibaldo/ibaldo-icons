'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileArrowUp = forwardRef(function FileArrowUp(
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
    createElement(Path, {"d":"M15 18L12 15L9 18","key":"0"}),
    createElement(Path, {"d":"M12 22L12 15","key":"1"}),
    createElement(Path, {"d":"M6 22C4.895 22 4 21.105 4 20L4 4C4 2.895 4.895 2 6 2L14.016 2C14.646 2 15.25 2.25 15.696 2.696L19.304 6.304C19.75 6.75 20 7.354 20 7.984L20 20C20 21.105 19.105 22 18 22","key":"2"}),
    createElement(Path, {"d":"M14 2L14 7C14 7.552 14.448 8 15 8L20 8","key":"3"})
  );
});

FileArrowUp.displayName = 'FileArrowUp';

module.exports = FileArrowUp;
module.exports.FileArrowUp = FileArrowUp;
module.exports.default = FileArrowUp;
