'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChartBellAxis = forwardRef(function ChartBellAxis(
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
    createElement(Path, {"d":"M2 2L2 22L22.023 22","key":"0"}),
    createElement(Path, {"d":"M6 18C11 18 7.91 5 13 5C18 5 16 18 21 18","key":"1"})
  );
});

ChartBellAxis.displayName = 'ChartBellAxis';

module.exports = ChartBellAxis;
module.exports.ChartBellAxis = ChartBellAxis;
module.exports.default = ChartBellAxis;
