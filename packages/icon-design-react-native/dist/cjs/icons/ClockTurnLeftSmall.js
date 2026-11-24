'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ClockTurnLeftSmall = forwardRef(function ClockTurnLeftSmall(
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
    createElement(Path, {"d":"M6 2L3 5L6 8","key":"0"}),
    createElement(Path, {"d":"M13 5C17.418 5 21 8.582 21 13C21 17.418 17.418 21 13 21C8.582 21 5 17.418 5 13","key":"1"}),
    createElement(Path, {"d":"M13 9L13 13L17 13","key":"2"}),
    createElement(Path, {"d":"M3 5L13 5","key":"3"})
  );
});

ClockTurnLeftSmall.displayName = 'ClockTurnLeftSmall';

module.exports = ClockTurnLeftSmall;
module.exports.ClockTurnLeftSmall = ClockTurnLeftSmall;
module.exports.default = ClockTurnLeftSmall;
