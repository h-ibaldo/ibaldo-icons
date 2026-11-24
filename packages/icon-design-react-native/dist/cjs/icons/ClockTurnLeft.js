'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ClockTurnLeft = forwardRef(function ClockTurnLeft(
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
    createElement(Path, {"d":"M5 2L3 4L5 6","key":"0"}),
    createElement(Path, {"d":"M12 4C16.973 4 21 8.027 21 13C21 17.973 16.973 22 12 22C7.027 22 3 17.973 3 13","key":"1"}),
    createElement(Path, {"d":"M3 4L12 4","key":"2"}),
    createElement(Path, {"d":"M12 9L12 13L16 13","key":"3"})
  );
});

ClockTurnLeft.displayName = 'ClockTurnLeft';

module.exports = ClockTurnLeft;
module.exports.ClockTurnLeft = ClockTurnLeft;
module.exports.default = ClockTurnLeft;
