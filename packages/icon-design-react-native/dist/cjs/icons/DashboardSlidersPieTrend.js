'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const DashboardSlidersPieTrend = forwardRef(function DashboardSlidersPieTrend(
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
    createElement(Path, {"d":"M22 7C22 4.238 19.762 2 17 2C14.238 2 12 4.238 12 7C12 9.762 14.238 12 17 12C19.762 12 22 9.762 22 7Z","key":"0"}),
    createElement(Path, {"d":"M17 2L17 7L22 7","key":"1"}),
    createElement(Path, {"d":"M2 14L2 22L21 22","key":"2"}),
    createElement(Path, {"d":"M5 19L10 15L15 19L21 15","key":"3"}),
    createElement(Path, {"d":"M2 4L9 4","key":"4"}),
    createElement(Path, {"d":"M2 9L9 9","key":"5"}),
    createElement(Path, {"d":"M5 4C5 3.445 4.555 3 4 3C3.445 3 3 3.445 3 4C3 4.555 3.445 5 4 5C4.555 5 5 4.555 5 4Z","key":"6"}),
    createElement(Path, {"d":"M8 9C8 8.445 7.555 8 7 8C6.445 8 6 8.445 6 9C6 9.555 6.445 10 7 10C7.555 10 8 9.555 8 9Z","key":"7"})
  );
});

DashboardSlidersPieTrend.displayName = 'DashboardSlidersPieTrend';

module.exports = DashboardSlidersPieTrend;
module.exports.DashboardSlidersPieTrend = DashboardSlidersPieTrend;
module.exports.default = DashboardSlidersPieTrend;
