'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CalendarSeventeenHeader = forwardRef(function CalendarSeventeenHeader(
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
    createElement(Path, {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 6C2 4.895 2.895 4 4 4L20 4C21.105 4 22 4.895 22 6L22 20C22 21.105 21.105 22 20 22Z","key":"0"}),
    createElement(Path, {"d":"M8 2L8 6","key":"1"}),
    createElement(Path, {"d":"M16 2L16 6","key":"2"}),
    createElement(Path, {"d":"M2 9L22 9","key":"3"}),
    createElement(Path, {"d":"M14 18L16 13L13 13","key":"4"}),
    createElement(Path, {"d":"M9.203 18L9.203 13L8.203 13","key":"5"})
  );
});

CalendarSeventeenHeader.displayName = 'CalendarSeventeenHeader';

module.exports = CalendarSeventeenHeader;
module.exports.CalendarSeventeenHeader = CalendarSeventeenHeader;
module.exports.default = CalendarSeventeenHeader;
