'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowRepeatOneTall = forwardRef(function ArrowRepeatOneTall(
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
    createElement(Path, {"d":"M18 2L21 5L18 8","key":"0"}),
    createElement(Path, {"d":"M6 22L3 19L6 16","key":"1"}),
    createElement(Path, {"d":"M21 5L7 5C4.789 5 3 6.789 3 9L3 13","key":"2"}),
    createElement(Path, {"d":"M3 19L17 19C19.211 19 21 17.211 21 15L21 11","key":"3"}),
    createElement(Path, {"d":"M11 10L12 10L12 14","key":"4"})
  );
});

ArrowRepeatOneTall.displayName = 'ArrowRepeatOneTall';

module.exports = ArrowRepeatOneTall;
module.exports.ArrowRepeatOneTall = ArrowRepeatOneTall;
module.exports.default = ArrowRepeatOneTall;
