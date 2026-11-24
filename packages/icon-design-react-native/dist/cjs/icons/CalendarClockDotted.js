'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CalendarClockDotted = forwardRef(function CalendarClockDotted(
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
    createElement(Path, {"d":"M9 22L4 22C2.895 22 2 21.105 2 20L2 6C2 4.895 2.895 4 4 4L18 4C19.105 4 20 4.895 20 6L20 7","key":"0"}),
    createElement(Path, {"d":"M7 2L7 6","key":"1"}),
    createElement(Path, {"d":"M15 2L15 6","key":"2"}),
    createElement(Path, {"d":"M2 10L8 10","key":"3"}),
    createElement(Path, {"d":"M6 14L6 14","key":"4"}),
    createElement(Path, {"d":"M6 18L6 18","key":"5"}),
    createElement(Path, {"d":"M22 16C22 19.313 19.313 22 16 22C12.688 22 10 19.313 10 16C10 12.688 12.688 10 16 10C19.313 10 22 12.688 22 16Z","key":"6"}),
    createElement(Path, {"d":"M16 14L16 16L18 16","key":"7"})
  );
});

CalendarClockDotted.displayName = 'CalendarClockDotted';

module.exports = CalendarClockDotted;
module.exports.CalendarClockDotted = CalendarClockDotted;
module.exports.default = CalendarClockDotted;
