'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polyline, Rect } = RNSvg;

const BookBookmarkSpineRounded = forwardRef(function BookBookmarkSpineRounded(
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
    createElement(Polyline, {"points":"17.000000026699126 1.999999999998181 17.000000026699126 10.999999999998181 14.000000026699126 8.999999999998181 11.000000026699126 10.999999999998181 11.000000026699126 1.999999999998181","key":"0"}),
    createElement(Rect, {"x":"2.500000026699126","y":"1.999999999998181","width":"19","height":"20","rx":"2","ry":"2","key":"1"}),
    createElement(Line, {"x1":"6.000000026699126","y1":"1.999999999998181","x2":"6.000000026699126","y2":"21.999999999998181","key":"2"})
  );
});

BookBookmarkSpineRounded.displayName = 'BookBookmarkSpineRounded';

module.exports = BookBookmarkSpineRounded;
module.exports.BookBookmarkSpineRounded = BookBookmarkSpineRounded;
module.exports.default = BookBookmarkSpineRounded;
