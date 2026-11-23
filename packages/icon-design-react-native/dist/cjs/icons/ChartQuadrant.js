'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChartQuadrant = forwardRef(function ChartQuadrant(
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
    createElement(Path, {"d":"M22 12L2 12","key":"3"}),
    createElement(Path, {"d":"M7 6L7 6","key":"4"}),
    createElement(Path, {"d":"M18 6L18 6","key":"5"}),
    createElement(Path, {"d":"M7 17L7 17","key":"6"}),
    createElement(Path, {"d":"M18 17L18 17","key":"7"})
  );
});

ChartQuadrant.displayName = 'ChartQuadrant';

module.exports = ChartQuadrant;
module.exports.ChartQuadrant = ChartQuadrant;
module.exports.default = ChartQuadrant;
