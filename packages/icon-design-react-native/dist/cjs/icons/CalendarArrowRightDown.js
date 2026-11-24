'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CalendarArrowRightDown = forwardRef(function CalendarArrowRightDown(
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
    createElement(Path, {"d":"M8 2L8 4","key":"0"}),
    createElement(Path, {"d":"M16 2L16 4","key":"1"}),
    createElement(Path, {"d":"M22 20L22 5C22 3.895 21.105 3 20 3L4 3C2.895 3 2 3.895 2 5L2 20C2 21.105 2.895 22 4 22L20 22C21.105 22 22 21.105 22 20Z","key":"2"}),
    createElement(Path, {"d":"M6 8L6 8","key":"3"}),
    createElement(Path, {"d":"M16 18L16 18","key":"4"}),
    createElement(Path, {"d":"M10 8L14 8C15.105 8 16 8.895 16 10L16 14","key":"5"}),
    createElement(Path, {"d":"M14 12L16 14L18 12","key":"6"})
  );
});

CalendarArrowRightDown.displayName = 'CalendarArrowRightDown';

module.exports = CalendarArrowRightDown;
module.exports.CalendarArrowRightDown = CalendarArrowRightDown;
module.exports.default = CalendarArrowRightDown;
