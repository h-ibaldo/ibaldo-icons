'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Rect } = RNSvg;

const BookInfoRounded = forwardRef(function BookInfoRounded(
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
    createElement(Rect, {"x":"4","y":"2","width":"16","height":"20","rx":"2","ry":"2","key":"0"}),
    createElement(Path, {"d":"M4,20v-.000002000000677c0-1.10456838878963.895429604909623-1.999997999999323,1.999997999999323-1.999997999999323h12.000004000001354c1.104568395099705,0,1.999997999999323-.895429611209693,1.999997999999323-1.999997999999323v-.000002000000677","key":"1"}),
    createElement(Line, {"x1":"12","y1":"6.989999999999782","x2":"12","y2":"7","key":"2"}),
    createElement(Line, {"x1":"12","y1":"13","x2":"12","y2":"10","key":"3"})
  );
});

BookInfoRounded.displayName = 'BookInfoRounded';

module.exports = BookInfoRounded;
module.exports.BookInfoRounded = BookInfoRounded;
module.exports.default = BookInfoRounded;
