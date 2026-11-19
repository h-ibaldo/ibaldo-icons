'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const DashboardTrendUpPie = forwardRef(function DashboardTrendUpPie(
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
    createElement(Path, {"d":"M14 16C14 12.688 11.313 10 8 10C4.688 10 2 12.688 2 16C2 19.313 4.688 22 8 22C11.313 22 14 19.313 14 16Z","key":"0"}),
    createElement(Path, {"d":"M8 10L8 16L14 16","key":"1"}),
    createElement(Path, {"d":"M18 12L22 12","key":"2"}),
    createElement(Path, {"d":"M18 16L22 16","key":"3"}),
    createElement(Path, {"d":"M18 20L22 20","key":"4"}),
    createElement(Path, {"d":"M2 7L10 3L17 7L22 2","key":"5"}),
    createElement(Path, {"d":"M18 2L22 2L22 6","key":"6"})
  );
});

DashboardTrendUpPie.displayName = 'DashboardTrendUpPie';

module.exports = DashboardTrendUpPie;
module.exports.DashboardTrendUpPie = DashboardTrendUpPie;
module.exports.default = DashboardTrendUpPie;
