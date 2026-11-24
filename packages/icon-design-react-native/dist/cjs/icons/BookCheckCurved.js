'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BookCheckCurved = forwardRef(function BookCheckCurved(
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
    createElement(Path, {"d":"M4 18L4 5C4 3.344 5.344 2 7 2L20 2L20 14","key":"0"}),
    createElement(Path, {"d":"M20 18L8 18","key":"1"}),
    createElement(Path, {"d":"M20 14L8 14C5.789 14 4 15.789 4 18C4 20.211 5.789 22 8 22L20 22","key":"2"}),
    createElement(Path, {"d":"M9 7L11 10L15 6","key":"3"})
  );
});

BookCheckCurved.displayName = 'BookCheckCurved';

module.exports = BookCheckCurved;
module.exports.BookCheckCurved = BookCheckCurved;
module.exports.default = BookCheckCurved;
