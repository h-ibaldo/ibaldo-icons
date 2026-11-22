'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChartBarStackedAxis = forwardRef(function ChartBarStackedAxis(
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
    createElement(Path, {"d":"M6 9L10 9L10 18L6 18Z","key":"1"}),
    createElement(Path, {"d":"M14 5L18 5L18 18L14 18Z","key":"2"}),
    createElement(Path, {"d":"M14 9L18 9","key":"3"}),
    createElement(Path, {"d":"M6 13L10 13","key":"4"})
  );
});

ChartBarStackedAxis.displayName = 'ChartBarStackedAxis';

module.exports = ChartBarStackedAxis;
module.exports.ChartBarStackedAxis = ChartBarStackedAxis;
module.exports.default = ChartBarStackedAxis;
