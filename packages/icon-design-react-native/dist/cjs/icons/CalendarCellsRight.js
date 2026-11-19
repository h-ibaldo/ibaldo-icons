'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CalendarCellsRight = forwardRef(function CalendarCellsRight(
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
    createElement(Path, {"d":"M6 12L6 10L8 10","key":"3"}),
    createElement(Path, {"d":"M11 12L11 10L13 10","key":"4"}),
    createElement(Path, {"d":"M18 10L16 10L16 12L18 12Z","key":"5"}),
    createElement(Path, {"d":"M6 18L6 16L8 16","key":"6"}),
    createElement(Path, {"d":"M11 18L11 16L13 16","key":"7"}),
    createElement(Path, {"d":"M16 16L18 16L18 18L16 18Z","key":"8"})
  );
});

CalendarCellsRight.displayName = 'CalendarCellsRight';

module.exports = CalendarCellsRight;
module.exports.CalendarCellsRight = CalendarCellsRight;
module.exports.default = CalendarCellsRight;
