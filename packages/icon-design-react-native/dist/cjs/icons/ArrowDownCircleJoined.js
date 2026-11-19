'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowDownCircleJoined = forwardRef(function ArrowDownCircleJoined(
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
    createElement(Path, {"d":"M15 11L12 14L9 11","key":"0"}),
    createElement(Path, {"d":"M7 3.348C3.746 5.234 1.648 8.891 2.051 13.004C2.5 17.633 6.238 21.426 10.859 21.938C16.895 22.605 22 17.898 22 12C22 8.008 19.66 4.563 16.277 2.961C14.293 2.02 12 3.484 12 5.68L12 14","key":"1"})
  );
});

ArrowDownCircleJoined.displayName = 'ArrowDownCircleJoined';

module.exports = ArrowDownCircleJoined;
module.exports.ArrowDownCircleJoined = ArrowDownCircleJoined;
module.exports.default = ArrowDownCircleJoined;
