'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowUturnDownFlippedDotsCircle = forwardRef(function ArrowUturnDownFlippedDotsCircle(
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
    createElement(Path, {"d":"M2 12L5 15L8 12","key":"0"}),
    createElement(Path, {"d":"M22 16.5C22 19.539 19.539 22 16.5 22C13.461 22 11 19.539 11 16.5C11 13.461 13.461 11 16.5 11C19.539 11 22 13.461 22 16.5Z","key":"1"}),
    createElement(Path, {"d":"M14.75 16.5L14.75 16.5","key":"2"}),
    createElement(Path, {"d":"M18.25 16.5L18.25 16.5","key":"3"}),
    createElement(Path, {"d":"M16.91 7C16.434 4.164 13.973 2 11 2C7.688 2 5 4.688 5 8L5 15","key":"4"})
  );
});

ArrowUturnDownFlippedDotsCircle.displayName = 'ArrowUturnDownFlippedDotsCircle';

module.exports = ArrowUturnDownFlippedDotsCircle;
module.exports.ArrowUturnDownFlippedDotsCircle = ArrowUturnDownFlippedDotsCircle;
module.exports.default = ArrowUturnDownFlippedDotsCircle;
