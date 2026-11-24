'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polygon } = RNSvg;

const ChartBarHorizontal = forwardRef(function ChartBarHorizontal(
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
    createElement(Polygon, {"points":"21.016630450973025 15.000000000480213 16.016630450973025 15.000000000480213 16.016630450973025 9.000000000480213 11.016630450973025 9.000000000480213 11.016630450973025 3.000000000480213 3.016630450973025 3.000000000480213 3.016630450973025 9.000000000480213 3.016630450973025 15.000000000480213 3.016630450973025 21.000000000480213 21.016630450973025 21.000000000480213 21.016630450973025 15.000000000480213","key":"0"}),
    createElement(Line, {"x1":"16.016630450973025","y1":"15.000000000480213","x2":"3.016630450973025","y2":"15.000000000480213","key":"1"}),
    createElement(Line, {"x1":"11.016630450973025","y1":"9.000000000480213","x2":"3.016630450973025","y2":"9.000000000480213","key":"2"})
  );
});

ChartBarHorizontal.displayName = 'ChartBarHorizontal';

module.exports = ChartBarHorizontal;
module.exports.ChartBarHorizontal = ChartBarHorizontal;
module.exports.default = ChartBarHorizontal;
