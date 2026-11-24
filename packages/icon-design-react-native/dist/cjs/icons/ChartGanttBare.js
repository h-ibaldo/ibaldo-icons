'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChartGanttBare = forwardRef(function ChartGanttBare(
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
    createElement(Path, {"d":"M12 12L2 12","key":"0"}),
    createElement(Path, {"d":"M19 18L6.965 18","key":"1"}),
    createElement(Path, {"d":"M22 6L10 6","key":"2"})
  );
});

ChartGanttBare.displayName = 'ChartGanttBare';

module.exports = ChartGanttBare;
module.exports.ChartGanttBare = ChartGanttBare;
module.exports.default = ChartGanttBare;
