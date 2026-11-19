'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CalendarDot = forwardRef(function CalendarDot(
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
    createElement(Path, {"d":"M3 10L21 10","key":"0"}),
    createElement(Path, {"d":"M22 18.5C22 20.434 20.434 22 18.5 22C16.566 22 15 20.434 15 18.5C15 16.566 16.566 15 18.5 15C20.434 15 22 16.566 22 18.5Z","key":"1"}),
    createElement(Path, {"d":"M8 2L8 6","key":"2"}),
    createElement(Path, {"d":"M16 2L16 6","key":"3"}),
    createElement(Path, {"d":"M21 16.055L21 6C21 4.895 20.105 4 19 4L5 4C3.895 4 3 4.895 3 6L3 19C3 20.105 3.895 21 5 21L16.055 21","key":"4"})
  );
});

CalendarDot.displayName = 'CalendarDot';

module.exports = CalendarDot;
module.exports.CalendarDot = CalendarDot;
module.exports.default = CalendarDot;
