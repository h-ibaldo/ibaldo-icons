'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChartGantt = forwardRef(function ChartGantt(
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
    createElement(Path, {"d":"M12.965 12L7 12","key":"1"}),
    createElement(Path, {"d":"M16.965 16L11 16","key":"2"}),
    createElement(Path, {"d":"M20.965 8L11 8","key":"3"})
  );
});

ChartGantt.displayName = 'ChartGantt';

module.exports = ChartGantt;
module.exports.ChartGantt = ChartGantt;
module.exports.default = ChartGantt;
