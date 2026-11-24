'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Rect } = RNSvg;

const GridRounded = forwardRef(function GridRounded(
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
    createElement(Rect, {"x":"2.000000005000402","y":"2.000000003888999","width":"7","height":"6.999999999997272","rx":"2","ry":"2","key":"0"}),
    createElement(Rect, {"x":"15.000000005000402","y":"2.000000003888999","width":"7","height":"6.999999999997272","rx":"2","ry":"2","key":"1"}),
    createElement(Rect, {"x":"2.000000005000402","y":"15.000000003886271","width":"7","height":"7","rx":"2","ry":"2","key":"2"}),
    createElement(Rect, {"x":"15.000000005000402","y":"15.000000003886271","width":"7","height":"7","rx":"2","ry":"2","key":"3"})
  );
});

GridRounded.displayName = 'GridRounded';

module.exports = GridRounded;
module.exports.GridRounded = GridRounded;
module.exports.default = GridRounded;
