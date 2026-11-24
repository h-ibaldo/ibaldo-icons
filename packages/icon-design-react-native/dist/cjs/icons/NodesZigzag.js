'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line } = RNSvg;

const NodesZigzag = forwardRef(function NodesZigzag(
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
    createElement(Circle, {"cx":"4","cy":"9.999999999998181","r":"2","key":"0"}),
    createElement(Circle, {"cx":"14","cy":"18.999999999998181","r":"2","key":"1"}),
    createElement(Circle, {"cx":"20","cy":"4.999999999998181","r":"2","key":"2"}),
    createElement(Line, {"x1":"14.78759765625","y1":"17.162109374998181","x2":"19.21240234375","y2":"6.837890624998181","key":"3"}),
    createElement(Line, {"x1":"5.481201171880457","y1":"11.333007812498181","x2":"12.518798828130457","y2":"17.666992187498181","key":"4"})
  );
});

NodesZigzag.displayName = 'NodesZigzag';

module.exports = NodesZigzag;
module.exports.NodesZigzag = NodesZigzag;
module.exports.default = NodesZigzag;
