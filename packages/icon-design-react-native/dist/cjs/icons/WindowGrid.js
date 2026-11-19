'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const WindowGrid = forwardRef(function WindowGrid(
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
    createElement(Rect, {"x":"2","y":"2","width":"8","height":"8","rx":"1","ry":"1","key":"0"}),
    createElement(Rect, {"x":"14","y":"2","width":"8","height":"8","rx":"1","ry":"1","key":"1"}),
    createElement(Rect, {"x":"2","y":"14","width":"8","height":"8","rx":"1","ry":"1","key":"2"}),
    createElement(Rect, {"x":"14","y":"14","width":"8","height":"8","rx":"1","ry":"1","key":"3"}),
    createElement(Line, {"x1":"2","y1":"4","x2":"10","y2":"4","key":"4"}),
    createElement(Line, {"x1":"2","y1":"16.000000000000909","x2":"10","y2":"16.000000000000909","key":"5"}),
    createElement(Line, {"x1":"14","y1":"4","x2":"22","y2":"4","key":"6"}),
    createElement(Line, {"x1":"14","y1":"16.000000000000909","x2":"22","y2":"16.000000000000909","key":"7"})
  );
});

WindowGrid.displayName = 'WindowGrid';

module.exports = WindowGrid;
module.exports.WindowGrid = WindowGrid;
module.exports.default = WindowGrid;
