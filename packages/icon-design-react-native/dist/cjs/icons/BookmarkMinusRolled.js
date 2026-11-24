'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const BookmarkMinusRolled = forwardRef(function BookmarkMinusRolled(
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
    createElement(Path, {"d":"M5.000000026699126,1.999999999998181h13c2.209138999320203,0,4,1.790861000679797,4,4v16l-7-4-7,4V4.999999999998181","key":"0"}),
    createElement(Path, {"d":"M2.000000026699126,4.999999999998181c0-1.656854249400567,1.343145750601252-3,3-3,1.656854249400567,0,3,1.343145750599433,3,3","key":"1"}),
    createElement(Polyline, {"points":"2.000000026699126 4.999999999998181 2.000000026699126 11.999999999998181 8.000000026699126 11.999999999998181","key":"2"}),
    createElement(Line, {"x1":"12.000000026699126","y1":"9.999999999998181","x2":"18.000000026699126","y2":"9.999999999998181","key":"3"})
  );
});

BookmarkMinusRolled.displayName = 'BookmarkMinusRolled';

module.exports = BookmarkMinusRolled;
module.exports.BookmarkMinusRolled = BookmarkMinusRolled;
module.exports.default = BookmarkMinusRolled;
