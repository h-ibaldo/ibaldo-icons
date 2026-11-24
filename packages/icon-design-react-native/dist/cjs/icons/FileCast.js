'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileCast = forwardRef(function FileCast(
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
    createElement(Path, {"d":"M4 9L4 4C4 2.895 4.895 2 6 2L14.016 2C14.646 2 15.25 2.25 15.696 2.696L19.304 6.304C19.75 6.75 20 7.354 20 7.984L20 20C20 21.105 19.105 22 18 22L17 22","key":"0"}),
    createElement(Path, {"d":"M14 2L14 7C14 7.552 14.448 8 15 8L20 8","key":"1"}),
    createElement(Path, {"d":"M5 22C5 21.448 4.552 21 4 21","key":"2"}),
    createElement(Path, {"d":"M9 22C9 19.239 6.761 17 4 17","key":"3"}),
    createElement(Path, {"d":"M13 22C13 17.029 8.971 13 4 13","key":"4"})
  );
});

FileCast.displayName = 'FileCast';

module.exports = FileCast;
module.exports.FileCast = FileCast;
module.exports.default = FileCast;
