'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Rect } = RNSvg;

const ChartBarDownSquare = forwardRef(function ChartBarDownSquare(
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
    createElement(Rect, {"x":"2","y":"2","width":"20","height":"20","rx":"5","ry":"5","key":"0"}),
    createElement(Rect, {"x":"14.000000054959855","y":"6.000000052228643","width":"4","height":"9.999999999101419","transform":"translate(32.000000108268978 22.000000105959771) rotate(-180)","key":"1"}),
    createElement(Rect, {"x":"9.999999963445134","y":"5.999999965728421","width":"4","height":"4.99999999937063","transform":"translate(23.99999992646508 16.999999931427737) rotate(-180)","key":"2"}),
    createElement(Rect, {"x":"6.000000033245215","y":"6.00000003066998","width":"4","height":"6.99999999981992","transform":"translate(16.000000065298082 19.000000062163963) rotate(-180)","key":"3"})
  );
});

ChartBarDownSquare.displayName = 'ChartBarDownSquare';

module.exports = ChartBarDownSquare;
module.exports.ChartBarDownSquare = ChartBarDownSquare;
module.exports.default = ChartBarDownSquare;
