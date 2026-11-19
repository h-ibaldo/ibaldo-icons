'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CalendarThirtyOneBar = forwardRef(function CalendarThirtyOneBar(
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
    createElement(Path, {"d":"M19.777 22L4.223 22C2.996 22 2 21.004 2 19.777L2 4.223C2 2.996 2.996 2 4.223 2L19.777 2C21.004 2 22 2.996 22 4.223L22 19.777C22 21.004 21.004 22 19.777 22Z","key":"0"}),
    createElement(Path, {"d":"M7 6L17 6","key":"1"}),
    createElement(Path, {"d":"M15 11L16.5 11L16.5 18","key":"2"}),
    createElement(Path, {"d":"M9 14C10.105 14 11 14.895 11 16C11 17.105 10.105 18 9 18C8.262 18 7.625 17.594 7.277 17","key":"3"}),
    createElement(Path, {"d":"M7 11L11 11L9 14","key":"4"})
  );
});

CalendarThirtyOneBar.displayName = 'CalendarThirtyOneBar';

module.exports = CalendarThirtyOneBar;
module.exports.CalendarThirtyOneBar = CalendarThirtyOneBar;
module.exports.default = CalendarThirtyOneBar;
