'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polyline } = RNSvg;

const ChartBarTrendDownThin = forwardRef(function ChartBarTrendDownThin(
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
    createElement(Polyline, {"points":"22.016630450973025 8.000000000480213 22.016630450973025 12.000000000480213 18.016630450973025 12.000000000480213","key":"0"}),
    createElement(Polyline, {"points":"22.016630450973025 12.000000000480213 16.016630450973025 6.000000000480213 13.516630450973025 8.500000000480213 8.516630450973025 3.500000000480213 6.016630450973025 6.000000000480213 2.016630450973025 2.000000000480213","key":"1"}),
    createElement(Line, {"x1":"2.016630450973025","y1":"9.000000000480213","x2":"2.016630450973025","y2":"22.000000000480213","key":"2"}),
    createElement(Line, {"x1":"6.016630450973025","y1":"11.000000000480213","x2":"6.016630450973025","y2":"22.000000000480213","key":"3"}),
    createElement(Line, {"x1":"10.016630450973025","y1":"13.000000000480213","x2":"10.016630450973025","y2":"22.000000000480213","key":"4"}),
    createElement(Line, {"x1":"14.016630450973025","y1":"15.000000000480213","x2":"14.016630450973025","y2":"22.000000000480213","key":"5"}),
    createElement(Line, {"x1":"18.016630450973025","y1":"17.000000000480213","x2":"18.016630450973025","y2":"22.000000000480213","key":"6"}),
    createElement(Line, {"x1":"22.016630450973025","y1":"19.000000000480213","x2":"22.016630450973025","y2":"22.000000000480213","key":"7"})
  );
});

ChartBarTrendDownThin.displayName = 'ChartBarTrendDownThin';

module.exports = ChartBarTrendDownThin;
module.exports.ChartBarTrendDownThin = ChartBarTrendDownThin;
module.exports.default = ChartBarTrendDownThin;
