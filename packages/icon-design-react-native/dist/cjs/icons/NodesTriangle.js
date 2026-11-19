'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line } = RNSvg;

const NodesTriangle = forwardRef(function NodesTriangle(
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
    createElement(Circle, {"cx":"5","cy":"11.999999999998181","r":"2","key":"0"}),
    createElement(Circle, {"cx":"19","cy":"3.999999999998181","r":"2","key":"1"}),
    createElement(Circle, {"cx":"19","cy":"19.999999999998181","r":"2","key":"2"}),
    createElement(Line, {"x1":"17.27099609375","y1":"4.988037109367724","x2":"6.72900390625","y2":"11.011962890617724","key":"3"}),
    createElement(Line, {"x1":"19","y1":"17.999999999998181","x2":"19","y2":"5.999999999998181","key":"4"}),
    createElement(Line, {"x1":"6.72900390625","y1":"12.988037109367724","x2":"17.27099609375","y2":"19.011962890617724","key":"5"})
  );
});

NodesTriangle.displayName = 'NodesTriangle';

module.exports = NodesTriangle;
module.exports.NodesTriangle = NodesTriangle;
module.exports.default = NodesTriangle;
