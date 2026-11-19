'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const BookmarkOffCurl = forwardRef(function BookmarkOffCurl(
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
    createElement(Path, {"d":"M19,8.999999999998181v-4.000002999999197c0-1.656852592641371,1.343144416809082-2.999997000000803,2.999996999998984-2.999997000000803h.000003000001016H7","key":"0"}),
    createElement(Polyline, {"points":"5 5.649999999997817 5 21.999999999998181 12 17.999999995146936 19 21.999999999998181 19 13.349999999998545","key":"1"}),
    createElement(Line, {"x1":"2","y1":"3.999999999998181","x2":"22","y2":"14.999999999998181","key":"2"})
  );
});

BookmarkOffCurl.displayName = 'BookmarkOffCurl';

module.exports = BookmarkOffCurl;
module.exports.BookmarkOffCurl = BookmarkOffCurl;
module.exports.default = BookmarkOffCurl;
