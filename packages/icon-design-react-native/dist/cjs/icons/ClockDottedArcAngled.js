'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ClockDottedArcAngled = forwardRef(function ClockDottedArcAngled(
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
    createElement(Path, {"d":"M12 2C6.477 2 2 6.477 2 12C2 13.852 2.512 15.578 3.391 17.066","strokeDasharray":"0 3.5","key":"0"}),
    createElement(Path, {"d":"M3.348 17C5.078 19.984 8.301 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2","key":"1"}),
    createElement(Path, {"d":"M12 6L12 12L8 14","key":"2"})
  );
});

ClockDottedArcAngled.displayName = 'ClockDottedArcAngled';

module.exports = ClockDottedArcAngled;
module.exports.ClockDottedArcAngled = ClockDottedArcAngled;
module.exports.default = ClockDottedArcAngled;
