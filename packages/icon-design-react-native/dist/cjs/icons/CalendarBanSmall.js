'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CalendarBanSmall = forwardRef(function CalendarBanSmall(
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
    createElement(Path, {"d":"M22 16.664C22 19.699 19.539 22.164 16.5 22.164C13.461 22.164 11 19.699 11 16.664C11 13.625 13.461 11.164 16.5 11.164C19.539 11.164 22 13.625 22 16.664Z","key":"0"}),
    createElement(Path, {"d":"M8 2L8 6","key":"1"}),
    createElement(Path, {"d":"M16 2L16 6","key":"2"}),
    createElement(Path, {"d":"M13 20.164L20 13.164","key":"3"}),
    createElement(Path, {"d":"M21 13.508L21 6C21 4.895 20.105 4 19 4L5 4C3.895 4 3 4.895 3 6L3 19.16C3 20.266 3.895 21.16 5 21.16L13.344 21.16","key":"4"})
  );
});

CalendarBanSmall.displayName = 'CalendarBanSmall';

module.exports = CalendarBanSmall;
module.exports.CalendarBanSmall = CalendarBanSmall;
module.exports.default = CalendarBanSmall;
