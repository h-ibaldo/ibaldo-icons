'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChartAxisGrid = forwardRef(function ChartAxisGrid(
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
    createElement(Path, {"d":"M12 2L12 22","key":"1"}),
    createElement(Path, {"d":"M12 2L12 22","key":"2"}),
    createElement(Path, {"d":"M22 12L2 12","key":"3"})
  );
});

ChartAxisGrid.displayName = 'ChartAxisGrid';

module.exports = ChartAxisGrid;
module.exports.ChartAxisGrid = ChartAxisGrid;
module.exports.default = ChartAxisGrid;
