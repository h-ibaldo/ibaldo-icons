'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChartBarHorizontalAxisTwo = forwardRef(function ChartBarHorizontalAxisTwo(
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
    createElement(Path, {"d":"M13.5 5.5L13.5 9.5L5.5 9.5L5.5 5.5Z","key":"1"}),
    createElement(Path, {"d":"M18.5 13.5L18.5 17.5L5.5 17.5L5.5 13.5Z","key":"2"})
  );
});

ChartBarHorizontalAxisTwo.displayName = 'ChartBarHorizontalAxisTwo';

module.exports = ChartBarHorizontalAxisTwo;
module.exports.ChartBarHorizontalAxisTwo = ChartBarHorizontalAxisTwo;
module.exports.default = ChartBarHorizontalAxisTwo;
