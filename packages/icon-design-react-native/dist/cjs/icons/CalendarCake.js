'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CalendarCake = forwardRef(function CalendarCake(
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
    createElement(Path, {"d":"M2 20L2 6C2 4.895 2.895 4 4 4L20 4C21.105 4 22 4.895 22 6L22 7","key":"0"}),
    createElement(Path, {"d":"M8 2L8 6","key":"1"}),
    createElement(Path, {"d":"M16 2L16 6","key":"2"}),
    createElement(Path, {"d":"M6 22L22 22","key":"3"}),
    createElement(Path, {"d":"M8 22L8 16L20 16L20 22","key":"4"}),
    createElement(Path, {"d":"M10 14L10 16","key":"5"}),
    createElement(Path, {"d":"M14 14L14 16","key":"6"}),
    createElement(Path, {"d":"M18 14L18 16","key":"7"}),
    createElement(Path, {"d":"M11 11L10 10","key":"8"}),
    createElement(Path, {"d":"M15 11L14 10","key":"9"}),
    createElement(Path, {"d":"M19 11L18 10","key":"10"})
  );
});

CalendarCake.displayName = 'CalendarCake';

module.exports = CalendarCake;
module.exports.CalendarCake = CalendarCake;
module.exports.default = CalendarCake;
