'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChartBarAxisTwo = forwardRef(function ChartBarAxisTwo(
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
    createElement(Path, {"d":"M6 10L10 10L10 18L6 18Z","key":"1"}),
    createElement(Path, {"d":"M14 5L18 5L18 18L14 18Z","key":"2"})
  );
});

ChartBarAxisTwo.displayName = 'ChartBarAxisTwo';

module.exports = ChartBarAxisTwo;
module.exports.ChartBarAxisTwo = ChartBarAxisTwo;
module.exports.default = ChartBarAxisTwo;
