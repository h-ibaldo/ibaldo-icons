'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CalendarGridBox = forwardRef(function CalendarGridBox(
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
    createElement(Path, {"d":"M8 2L8 6","key":"0"}),
    createElement(Path, {"d":"M16 2L16 6","key":"1"}),
    createElement(Path, {"d":"M22 20L22 6C22 4.895 21.105 4 20 4L4 4C2.895 4 2 4.895 2 6L2 20C2 21.105 2.895 22 4 22L20 22C21.105 22 22 21.105 22 20Z","key":"2"}),
    createElement(Path, {"d":"M18 18L6 18L6 10L18 10Z","key":"3"}),
    createElement(Path, {"d":"M6 14L18 14","key":"4"}),
    createElement(Path, {"d":"M12 10L12 18","key":"5"})
  );
});

CalendarGridBox.displayName = 'CalendarGridBox';

module.exports = CalendarGridBox;
module.exports.CalendarGridBox = CalendarGridBox;
module.exports.default = CalendarGridBox;
