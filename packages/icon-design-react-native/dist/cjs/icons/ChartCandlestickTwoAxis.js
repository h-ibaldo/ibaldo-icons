'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChartCandlestickTwoAxis = forwardRef(function ChartCandlestickTwoAxis(
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
    createElement(Path, {"d":"M7 6L11 6L11 14L7 14Z","key":"1"}),
    createElement(Path, {"d":"M15 10L19 10L19 15L15 15Z","key":"2"}),
    createElement(Path, {"d":"M17 7L17 10","key":"3"}),
    createElement(Path, {"d":"M9 3L9 6","key":"4"}),
    createElement(Path, {"d":"M9 14L9 17","key":"5"}),
    createElement(Path, {"d":"M17 15L17 18","key":"6"})
  );
});

ChartCandlestickTwoAxis.displayName = 'ChartCandlestickTwoAxis';

module.exports = ChartCandlestickTwoAxis;
module.exports.ChartCandlestickTwoAxis = ChartCandlestickTwoAxis;
module.exports.default = ChartCandlestickTwoAxis;
