'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const DashboardPieListBars = forwardRef(function DashboardPieListBars(
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
    createElement(Path, {"d":"M12 7C12 4.238 9.762 2 7 2C4.238 2 2 4.238 2 7C2 9.762 4.238 12 7 12C9.762 12 12 9.762 12 7Z","key":"0"}),
    createElement(Path, {"d":"M7 2L7 7L12 7","key":"1"}),
    createElement(Path, {"d":"M7 18L2 18L2 22L7 22Z","key":"2"}),
    createElement(Path, {"d":"M12 15L7 15L7 22L12 22Z","key":"3"}),
    createElement(Path, {"d":"M17 17L12 17L12 22L17 22Z","key":"4"}),
    createElement(Path, {"d":"M22 11L17 11L17 22L22 22Z","key":"5"}),
    createElement(Path, {"d":"M17 2L22 2","key":"6"}),
    createElement(Path, {"d":"M17 6L22 6","key":"7"})
  );
});

DashboardPieListBars.displayName = 'DashboardPieListBars';

module.exports = DashboardPieListBars;
module.exports.DashboardPieListBars = DashboardPieListBars;
module.exports.default = DashboardPieListBars;
