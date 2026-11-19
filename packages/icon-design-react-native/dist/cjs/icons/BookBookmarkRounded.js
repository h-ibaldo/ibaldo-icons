'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path, Polyline, Rect } = RNSvg;

const BookBookmarkRounded = forwardRef(function BookBookmarkRounded(
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
    createElement(Polyline, {"points":"15.000000026699126 1.999999999998181 15.000000026699126 10.000000000007276 12.000000026699126 8.000000000007276 9.000000026699126 10.000000000007276 9.000000026699126 1.999999999998181","key":"0"}),
    createElement(Rect, {"x":"4.000000026699126","y":"1.999999999998181","width":"16","height":"20","rx":"2","ry":"2","key":"1"}),
    createElement(Path, {"d":"M4.000000026699126,19.999999999998181v-.000001999998858c0-1.104568388791449.895429604910532-1.999998000001142,1.999997999990228-1.999998000001142h12.000004000010449c1.10456839509061,0,1.999997999999323-.895429611208783,1.999997999999323-1.999998000001142v-.000001999998858","key":"2"})
  );
});

BookBookmarkRounded.displayName = 'BookBookmarkRounded';

module.exports = BookBookmarkRounded;
module.exports.BookBookmarkRounded = BookBookmarkRounded;
module.exports.default = BookBookmarkRounded;
