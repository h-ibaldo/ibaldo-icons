'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const BrowserSlidersTwo = forwardRef(function BrowserSlidersTwo(
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
    createElement(Line, {"x1":"2","y1":"8","x2":"22","y2":"8","key":"0"}),
    createElement(Line, {"x1":"19","y1":"5","x2":"11","y2":"5","key":"1"}),
    createElement(Line, {"x1":"8","y1":"12","x2":"8","y2":"18","key":"2"}),
    createElement(Line, {"x1":"16","y1":"12","x2":"16","y2":"18","key":"3"}),
    createElement(Line, {"x1":"6","y1":"14","x2":"10","y2":"14","key":"4"}),
    createElement(Line, {"x1":"14","y1":"16","x2":"18","y2":"16","key":"5"}),
    createElement(Rect, {"x":"2","y":"2","width":"20","height":"20","rx":"2","ry":"2","key":"6"}),
    createElement(Line, {"x1":"5.009999993990277","y1":"4.998779299956368","x2":"4.999999993990059","y2":"4.998779299956368","key":"7"}),
    createElement(Line, {"x1":"8.009999993990277","y1":"4.998779299956368","x2":"7.999999993990059","y2":"4.998779299956368","key":"8"})
  );
});

BrowserSlidersTwo.displayName = 'BrowserSlidersTwo';

module.exports = BrowserSlidersTwo;
module.exports.BrowserSlidersTwo = BrowserSlidersTwo;
module.exports.default = BrowserSlidersTwo;
