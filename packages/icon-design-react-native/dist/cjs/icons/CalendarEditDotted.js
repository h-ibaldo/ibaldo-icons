'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CalendarEditDotted = forwardRef(function CalendarEditDotted(
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
    createElement(Path, {"d":"M8 22L4 22C2.895 22 2 21.105 2 20L2 6C2 4.895 2.895 4 4 4L20 4C21.105 4 22 4.895 22 6L22 10","key":"0"}),
    createElement(Path, {"d":"M8 2L8 6","key":"1"}),
    createElement(Path, {"d":"M16 2L16 6","key":"2"}),
    createElement(Path, {"d":"M2 10L22 10","key":"3"}),
    createElement(Path, {"d":"M21.293 15.293L19.707 13.707C19.316 13.316 18.684 13.316 18.293 13.707L13 19L13 22L16 22L21.293 16.707C21.684 16.316 21.684 15.684 21.293 15.293Z","key":"4"}),
    createElement(Path, {"d":"M6 14L6 14","key":"5"}),
    createElement(Path, {"d":"M10 14L10 14","key":"6"}),
    createElement(Path, {"d":"M6 18L6 18","key":"7"})
  );
});

CalendarEditDotted.displayName = 'CalendarEditDotted';

module.exports = CalendarEditDotted;
module.exports.CalendarEditDotted = CalendarEditDotted;
module.exports.default = CalendarEditDotted;
