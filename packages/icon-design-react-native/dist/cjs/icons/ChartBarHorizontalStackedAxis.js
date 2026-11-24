'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChartBarHorizontalStackedAxis = forwardRef(function ChartBarHorizontalStackedAxis(
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
    createElement(Path, {"d":"M15 5L15 9L6 9L6 5Z","key":"1"}),
    createElement(Path, {"d":"M19 13L19 17L6 17L6 13Z","key":"2"}),
    createElement(Path, {"d":"M11 5L11 9","key":"3"}),
    createElement(Path, {"d":"M15 13L15 17","key":"4"})
  );
});

ChartBarHorizontalStackedAxis.displayName = 'ChartBarHorizontalStackedAxis';

module.exports = ChartBarHorizontalStackedAxis;
module.exports.ChartBarHorizontalStackedAxis = ChartBarHorizontalStackedAxis;
module.exports.default = ChartBarHorizontalStackedAxis;
