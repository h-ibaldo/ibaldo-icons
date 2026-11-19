'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CalendarSync = forwardRef(function CalendarSync(
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
    createElement(Path, {"d":"M21 6C21 4.895 20.105 4 19 4L5 4C3.895 4 3 4.895 3 6L3 19C3 20.105 3.895 21 5 21L6 21","key":"2"}),
    createElement(Path, {"d":"M22 10L22 14L18 14","key":"3"}),
    createElement(Path, {"d":"M10 22L10 18L14 18","key":"4"}),
    createElement(Path, {"d":"M21 12.715C19.93 11.086 18.098 10 16 10C13.391 10 11.176 11.672 10.352 14","key":"5"}),
    createElement(Path, {"d":"M11 19.313C12.074 20.934 13.91 22 16 22C18.609 22 20.824 20.328 21.648 18","key":"6"})
  );
});

CalendarSync.displayName = 'CalendarSync';

module.exports = CalendarSync;
module.exports.CalendarSync = CalendarSync;
module.exports.default = CalendarSync;
