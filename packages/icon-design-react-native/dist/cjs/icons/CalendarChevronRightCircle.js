'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CalendarChevronRightCircle = forwardRef(function CalendarChevronRightCircle(
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
    createElement(Path, {"d":"M22 16C22 19.313 19.313 22 16 22C12.688 22 10 19.313 10 16C10 12.688 12.688 10 16 10C19.313 10 22 12.688 22 16Z","key":"0"}),
    createElement(Path, {"d":"M16 18L18 16L16 14","key":"1"}),
    createElement(Path, {"d":"M8 2L8 6","key":"2"}),
    createElement(Path, {"d":"M16 2L16 6","key":"3"}),
    createElement(Path, {"d":"M21 12.688L21 6C21 4.895 20.105 4 19 4L5 4C3.895 4 3 4.895 3 6L3 19C3 20.105 3.895 21 5 21L12.688 21","key":"4"})
  );
});

CalendarChevronRightCircle.displayName = 'CalendarChevronRightCircle';

module.exports = CalendarChevronRightCircle;
module.exports.CalendarChevronRightCircle = CalendarChevronRightCircle;
module.exports.default = CalendarChevronRightCircle;
