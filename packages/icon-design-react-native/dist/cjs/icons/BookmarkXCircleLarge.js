'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Path } = RNSvg;

const BookmarkXCircleLarge = forwardRef(function BookmarkXCircleLarge(
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
    createElement(Circle, {"cx":"15.999999970878889","cy":"7.999999997570285","r":"5.999999997575514","key":"0"}),
    createElement(Line, {"x1":"13.999999955856765","y1":"9.999999999998181","x2":"17.999999955856765","y2":"5.999999999998181","key":"1"}),
    createElement(Line, {"x1":"13.999999955856765","y1":"5.999999999998181","x2":"17.999999955856765","y2":"9.999999999998181","key":"2"}),
    createElement(Path, {"d":"M15.999999999998181,1.999999999998181H2.999999973304512c-.55230712890625,0-1,.447692871090112-1,1v19l7-4,7,4v-8.000000004851245","key":"3"})
  );
});

BookmarkXCircleLarge.displayName = 'BookmarkXCircleLarge';

module.exports = BookmarkXCircleLarge;
module.exports.BookmarkXCircleLarge = BookmarkXCircleLarge;
module.exports.default = BookmarkXCircleLarge;
