'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, G, Line, Path } = RNSvg;

const BookmarkDotsCircle = forwardRef(function BookmarkDotsCircle(
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
    createElement(Path, {"d":"M16.999999973079866,5.999999999998181l.000000000220098-3c0-.552284749830505-.447715250170404-1-1-1H3.999999973299964c-.552284749829596,0-1,.447715250169495-1,1v19l7-4,7,4-.000000000220098-6","key":"0"}),
    createElement(Circle, {"cx":"16.999999973299964","cy":"10.999999999998181","r":"5","key":"1"}),
    createElement(G, {"key":"2"},
      createElement(Line, {"x1":"15.499999973299964","y1":"11.009999999998399","x2":"15.499999973299964","y2":"10.999999999998181","key":"0"}),
      createElement(Line, {"x1":"18.499999973299964","y1":"11.009999999998399","x2":"18.499999973299964","y2":"10.999999999998181","key":"1"}))
  );
});

BookmarkDotsCircle.displayName = 'BookmarkDotsCircle';

module.exports = BookmarkDotsCircle;
module.exports.BookmarkDotsCircle = BookmarkDotsCircle;
module.exports.default = BookmarkDotsCircle;
