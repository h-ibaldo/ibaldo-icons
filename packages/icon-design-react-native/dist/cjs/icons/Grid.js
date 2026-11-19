'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Rect } = RNSvg;

const Grid = forwardRef(function Grid(
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
    createElement(Rect, {"x":"2.000000005000402","y":"2.000000003888999","width":"8","height":"8","rx":"1","ry":"1","key":"0"}),
    createElement(Rect, {"x":"14.000000005000402","y":"2.000000003888999","width":"8","height":"8","rx":"1","ry":"1","key":"1"}),
    createElement(Rect, {"x":"2.000000005000402","y":"14.000000003886271","width":"8","height":"8","rx":"1","ry":"1","key":"2"}),
    createElement(Rect, {"x":"14.000000005000402","y":"14.000000003886271","width":"8","height":"8","rx":"1","ry":"1","key":"3"})
  );
});

Grid.displayName = 'Grid';

module.exports = Grid;
module.exports.Grid = Grid;
module.exports.default = Grid;
