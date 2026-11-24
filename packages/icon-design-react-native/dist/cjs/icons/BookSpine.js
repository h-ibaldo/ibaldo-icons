'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BookSpine = forwardRef(function BookSpine(
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
    createElement(Path, {"d":"M20 17L20 22","key":"0"}),
    createElement(Path, {"d":"M3 19.5L3 4.5C3 3.117 4.117 2 5.5 2L20 2C20.551 2 21 2.449 21 3L21 16C21 16.551 20.551 17 20 17L5.5 17C4.117 17 3 18.117 3 19.5C3 20.883 4.117 22 5.5 22L21 22","key":"1"}),
    createElement(Path, {"d":"M8 2L8 17","key":"2"})
  );
});

BookSpine.displayName = 'BookSpine';

module.exports = BookSpine;
module.exports.BookSpine = BookSpine;
module.exports.default = BookSpine;
