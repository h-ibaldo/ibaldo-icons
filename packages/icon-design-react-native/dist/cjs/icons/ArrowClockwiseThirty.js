'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowClockwiseThirty = forwardRef(function ArrowClockwiseThirty(
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
    createElement(Path, {"d":"M19 2L19 5L16 5","key":"0"}),
    createElement(Path, {"d":"M19 4.875C17.195 3.102 14.73 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 10.953 21.84 9.945 21.539 9","key":"1"}),
    createElement(Path, {"d":"M15 16C13.895 16 13 15.105 13 14L13 10C13 8.895 13.895 8 15 8C16.105 8 17 8.895 17 10L17 14C17 15.105 16.105 16 15 16Z","key":"2"}),
    createElement(Path, {"d":"M7 15.723C7.402 15.957 7.887 16.07 8.41 15.957C9.363 15.75 10 14.832 10 13.859C10 12.832 9.168 12 8.145 12L8 12","key":"3"}),
    createElement(Path, {"d":"M7 8.277C7.402 8.043 7.887 7.93 8.41 8.043C9.363 8.25 10 9.168 10 10.141C10 11.168 9.168 12 8.145 12L8 12","key":"4"})
  );
});

ArrowClockwiseThirty.displayName = 'ArrowClockwiseThirty';

module.exports = ArrowClockwiseThirty;
module.exports.ArrowClockwiseThirty = ArrowClockwiseThirty;
module.exports.default = ArrowClockwiseThirty;
