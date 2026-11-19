'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polyline, Rect } = RNSvg;

const BookmarkPageSquare = forwardRef(function BookmarkPageSquare(
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
    createElement(Polyline, {"points":"12.000000026695488 1.999999999998181 12.000000026695488 9.999999999998181 9.000000026695488 7.999999999998181 6.000000026695488 9.999999999998181 6.000000026695488 1.999999999998181","key":"0"}),
    createElement(Rect, {"x":"2.000000026695488","y":"1.999999999998181","width":"19.984068797650252","height":"20","rx":"2","ry":"2","key":"1"}),
    createElement(Line, {"x1":"6.000000026695488","y1":"13.999999999998181","x2":"18.000000026695488","y2":"13.999999999998181","key":"2"}),
    createElement(Line, {"x1":"15.984068824345741","y1":"9.999999999998181","x2":"18.000000026695488","y2":"9.999999999998181","key":"3"}),
    createElement(Line, {"x1":"15.984068824345741","y1":"5.999999999998181","x2":"18.000000026695488","y2":"5.999999999998181","key":"4"}),
    createElement(Line, {"x1":"6.000000026695488","y1":"17.999999999998181","x2":"18.000000026695488","y2":"17.999999999998181","key":"5"})
  );
});

BookmarkPageSquare.displayName = 'BookmarkPageSquare';

module.exports = BookmarkPageSquare;
module.exports.BookmarkPageSquare = BookmarkPageSquare;
module.exports.default = BookmarkPageSquare;
