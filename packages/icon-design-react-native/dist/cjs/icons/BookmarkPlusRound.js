'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const BookmarkPlusRound = forwardRef(function BookmarkPlusRound(
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
    createElement(Path, {"d":"M15.999999999996362,1.999999999998181H7.999999999996362c-1.656854249493335,0-3,1.343145750509393-3,3v17l7-4,7,4V4.999999999998181c0-1.656854249490607-1.343145750508484-3-3-3Z","key":"0"}),
    createElement(Line, {"x1":"8.999999999996362","y1":"9.999999999998181","x2":"14.999999999996362","y2":"9.999999999998181","key":"1"}),
    createElement(Line, {"x1":"11.999999999996362","y1":"6.999999999998181","x2":"11.999999999996362","y2":"12.999999999998181","key":"2"})
  );
});

BookmarkPlusRound.displayName = 'BookmarkPlusRound';

module.exports = BookmarkPlusRound;
module.exports.BookmarkPlusRound = BookmarkPlusRound;
module.exports.default = BookmarkPlusRound;
