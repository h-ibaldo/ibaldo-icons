'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const BookmarkMinusCorner = forwardRef(function BookmarkMinusCorner(
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
    createElement(Path, {"d":"M10.000000000012733,2.999999999998181h-4.000000000003638c-.552284749830505,0-1,.447715250169495-1,1v18l7-4,7,4v-12.000000000009095","key":"0"}),
    createElement(Line, {"x1":"14.000000000012733","y1":"4.999999999989086","x2":"20.000000000012733","y2":"4.999999999989086","key":"1"})
  );
});

BookmarkMinusCorner.displayName = 'BookmarkMinusCorner';

module.exports = BookmarkMinusCorner;
module.exports.BookmarkMinusCorner = BookmarkMinusCorner;
module.exports.default = BookmarkMinusCorner;
