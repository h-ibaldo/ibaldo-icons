'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const WindowModalBare = forwardRef(function WindowModalBare(
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
    createElement(Rect, {"x":"2","y":"2","width":"20","height":"20","rx":"2","ry":"2","key":"0"}),
    createElement(Line, {"x1":"6.010000000000218","y1":"6","x2":"6","y2":"6","key":"1"}),
    createElement(Line, {"x1":"9.010000000000218","y1":"6","x2":"9","y2":"6","key":"2"}),
    createElement(Line, {"x1":"12.010000000000218","y1":"6","x2":"12","y2":"6","key":"3"}),
    createElement(Rect, {"x":"7","y":"11","width":"12","height":"8","rx":"1","ry":"1","key":"4"})
  );
});

WindowModalBare.displayName = 'WindowModalBare';

module.exports = WindowModalBare;
module.exports.WindowModalBare = WindowModalBare;
module.exports.default = WindowModalBare;
