'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path, Polyline } = RNSvg;

const BookmarkCheckCorner = forwardRef(function BookmarkCheckCorner(
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
    createElement(Polyline, {"points":"14.000000000003638 5.999999999989086 16.000000000003638 7.999999999989086 20.000000000003638 2.999999999989086","key":"0"}),
    createElement(Path, {"d":"M11.000000000007276,2.999999999998181h-5.000000000003638c-.552284749830505,0-1,.447715250169495-1,1v18l7-4,7,4v-11.000000000009095","key":"1"})
  );
});

BookmarkCheckCorner.displayName = 'BookmarkCheckCorner';

module.exports = BookmarkCheckCorner;
module.exports.BookmarkCheckCorner = BookmarkCheckCorner;
module.exports.default = BookmarkCheckCorner;
