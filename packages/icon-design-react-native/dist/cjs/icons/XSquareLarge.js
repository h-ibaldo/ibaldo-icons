'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const XSquareLarge = forwardRef(function XSquareLarge(
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
    createElement(Line, {"x1":"7.999999990970537","y1":"16.000000000715772","x2":"15.999999990599463","y2":"8.00000000107957","key":"0"}),
    createElement(Line, {"x1":"15.999999990419383","y1":"16.000000000894943","x2":"7.999999991139703","y2":"8.0000000009004","key":"1"}),
    createElement(Rect, {"x":"1.999999990779543","y":"2.000000000897671","width":"20","height":"20","rx":"3","ry":"3","key":"2"})
  );
});

XSquareLarge.displayName = 'XSquareLarge';

module.exports = XSquareLarge;
module.exports.XSquareLarge = XSquareLarge;
module.exports.default = XSquareLarge;
