'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ClockClockwise = forwardRef(function ClockClockwise(
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
    createElement(Path, {"d":"M20 2L20 6L16 6","key":"0"}),
    createElement(Path, {"d":"M19.984 6C18.16 3.574 15.27 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 11.316 21.93 10.645 21.801 10","key":"1"}),
    createElement(Path, {"d":"M12 7L12 12L17 12","key":"2"})
  );
});

ClockClockwise.displayName = 'ClockClockwise';

module.exports = ClockClockwise;
module.exports.ClockClockwise = ClockClockwise;
module.exports.default = ClockClockwise;
