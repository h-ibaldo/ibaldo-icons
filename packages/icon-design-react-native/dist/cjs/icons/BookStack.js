'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BookStack = forwardRef(function BookStack(
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
    createElement(Path, {"d":"M21 9L6 9C4.344 9 3 7.656 3 6C3 4.344 4.344 3 6 3L21 3","key":"0"}),
    createElement(Path, {"d":"M21 15L6 15C4.344 15 3 13.656 3 12C3 10.344 4.344 9 6 9L21 9","key":"1"}),
    createElement(Path, {"d":"M21 21L6 21C4.344 21 3 19.656 3 18C3 16.344 4.344 15 6 15L21 15","key":"2"})
  );
});

BookStack.displayName = 'BookStack';

module.exports = BookStack;
module.exports.BookStack = BookStack;
module.exports.default = BookStack;
