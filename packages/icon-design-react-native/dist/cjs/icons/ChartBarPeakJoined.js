'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polygon } = RNSvg;

const ChartBarPeakJoined = forwardRef(function ChartBarPeakJoined(
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
    createElement(Polygon, {"points":"9.016630450567391 12.000000000480213 9.016630450567391 3.000000000480213 15.016630450567391 3.000000000480213 15.016630450567391 8.000000000480213 21.016630450567391 8.000000000480213 21.016630450567391 21.000000000480213 15.016630450567391 21.000000000480213 9.016630450567391 21.000000000480213 3.016630450567391 21.000000000480213 3.016630450567391 12.000000000480213 9.016630450567391 12.000000000480213","key":"0"}),
    createElement(Line, {"x1":"9.016630450567391","y1":"3.000000000480213","x2":"9.016630450567391","y2":"21.000000000480213","key":"1"}),
    createElement(Line, {"x1":"15.016630450567391","y1":"8.000000000480213","x2":"15.016630450567391","y2":"21.000000000480213","key":"2"})
  );
});

ChartBarPeakJoined.displayName = 'ChartBarPeakJoined';

module.exports = ChartBarPeakJoined;
module.exports.ChartBarPeakJoined = ChartBarPeakJoined;
module.exports.default = ChartBarPeakJoined;
