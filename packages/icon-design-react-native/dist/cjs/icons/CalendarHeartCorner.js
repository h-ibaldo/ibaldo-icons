'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CalendarHeartCorner = forwardRef(function CalendarHeartCorner(
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
    createElement(Path, {"d":"M22 10L22 6C22 4.895 21.105 4 20 4L4 4C2.895 4 2 4.895 2 6L2 20C2 21.105 2.895 22 4 22L10 22","key":"2"}),
    createElement(Path, {"d":"M14.758 21.414L11.172 17.828C10.066 16.723 10.066 14.934 11.172 13.828C12.277 12.723 14.066 12.723 15.172 13.828L16.172 14.828L17.172 13.828C18.277 12.723 20.066 12.723 21.172 13.828C22.277 14.934 22.277 16.723 21.172 17.828L17.586 21.414C16.805 22.195 15.539 22.195 14.758 21.414Z","key":"3"})
  );
});

CalendarHeartCorner.displayName = 'CalendarHeartCorner';

module.exports = CalendarHeartCorner;
module.exports.CalendarHeartCorner = CalendarHeartCorner;
module.exports.default = CalendarHeartCorner;
