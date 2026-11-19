'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const BookmarkStriped = forwardRef(function BookmarkStriped(
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
    createElement(Path, {"d":"M18,1.999999999998181H6c-.552284749830505,0-1,.447715250169495-1,1v19l7-4,7,4V2.999999999998181c0-.552284749830505-.447715250169495-1-1-1Z","key":"0"}),
    createElement(Line, {"x1":"19","y1":"15.999999999998181","x2":"15.181884765619543","y2":"19.818115234367724","key":"1"}),
    createElement(Line, {"x1":"19","y1":"11.999999999998181","x2":"12.636352539059772","y2":"18.363647460938409","key":"2"}),
    createElement(Line, {"x1":"19","y1":"7.999999999998181","x2":"5","y2":"21.999999999998181","key":"3"}),
    createElement(Line, {"x1":"5","y1":"17.999999999998181","x2":"19","y2":"3.999999999998181","key":"4"}),
    createElement(Line, {"x1":"17","y1":"1.999999999998181","x2":"5","y2":"13.999999999998181","key":"5"}),
    createElement(Line, {"x1":"5","y1":"9.999999999998181","x2":"13","y2":"1.999999999998181","key":"6"}),
    createElement(Line, {"x1":"9","y1":"1.999999999998181","x2":"5","y2":"5.999999999998181","key":"7"})
  );
});

BookmarkStriped.displayName = 'BookmarkStriped';

module.exports = BookmarkStriped;
module.exports.BookmarkStriped = BookmarkStriped;
module.exports.default = BookmarkStriped;
