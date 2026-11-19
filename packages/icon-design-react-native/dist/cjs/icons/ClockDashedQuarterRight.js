'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ClockDashedQuarterRight = forwardRef(function ClockDashedQuarterRight(
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
    createElement(Path, {"d":"M19.648 5.563C19.277 5.125 18.875 4.719 18.438 4.352","key":"0"}),
    createElement(Path, {"d":"M15.402 2.605C14.871 2.414 14.32 2.262 13.75 2.164","key":"1"}),
    createElement(Path, {"d":"M21.836 10.25C21.738 9.68 21.586 9.129 21.395 8.598","key":"2"}),
    createElement(Path, {"d":"M10.25 2.164C5.563 2.992 2 7.074 2 12C2 17.523 6.477 22 12 22C16.926 22 21.008 18.438 21.836 13.75","key":"3"}),
    createElement(Path, {"d":"M12 7L12 12L17 12","key":"4"})
  );
});

ClockDashedQuarterRight.displayName = 'ClockDashedQuarterRight';

module.exports = ClockDashedQuarterRight;
module.exports.ClockDashedQuarterRight = ClockDashedQuarterRight;
module.exports.default = ClockDashedQuarterRight;
