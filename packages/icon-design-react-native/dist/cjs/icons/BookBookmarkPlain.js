'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Polyline, Rect } = RNSvg;

const BookBookmarkPlain = forwardRef(function BookBookmarkPlain(
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
    createElement(Polyline, {"points":"15.000000026699126 1.999999999998181 15.000000026699126 10.999999999998181 12.000000026699126 8.999999999998181 9.000000026699126 10.999999999998181 9.000000026699126 1.999999999998181","key":"0"}),
    createElement(Rect, {"x":"4.000000026699126","y":"1.999999999998181","width":"16","height":"20","key":"1"})
  );
});

BookBookmarkPlain.displayName = 'BookBookmarkPlain';

module.exports = BookBookmarkPlain;
module.exports.BookBookmarkPlain = BookBookmarkPlain;
module.exports.default = BookBookmarkPlain;
