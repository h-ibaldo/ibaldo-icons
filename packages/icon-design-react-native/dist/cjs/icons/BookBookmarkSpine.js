'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polyline, Rect } = RNSvg;

const BookBookmarkSpine = forwardRef(function BookBookmarkSpine(
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
    createElement(Rect, {"x":"6.000000026699126","y":"1.999999999998181","width":"15.999999999990905","height":"20","key":"1"}),
    createElement(Line, {"x1":"2.000000026699126","y1":"1.999999999998181","x2":"2.000000026699126","y2":"21.999999999998181","key":"2"})
  );
});

BookBookmarkSpine.displayName = 'BookBookmarkSpine';

module.exports = BookBookmarkSpine;
module.exports.BookBookmarkSpine = BookBookmarkSpine;
module.exports.default = BookBookmarkSpine;
