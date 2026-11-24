'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const MonitorChatBoxy = forwardRef(function MonitorChatBoxy(
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
    createElement(Path, {"d":"M22 13L22 16C22 17.105 21.105 18 20 18L4 18C2.895 18 2 17.105 2 16L2 6.949C2 5.848 2.895 4.949 4 4.949L6 4.949","key":"0"}),
    createElement(Path, {"d":"M6 22L18 22","key":"1"}),
    createElement(Path, {"d":"M12 18L12 22","key":"2"}),
    createElement(Path, {"d":"M10 4L10 12L14 9L20 9C21.105 9 22 8.105 22 7L22 4C22 2.895 21.105 2 20 2L12 2C10.895 2 10 2.895 10 4Z","key":"3"})
  );
});

MonitorChatBoxy.displayName = 'MonitorChatBoxy';

module.exports = MonitorChatBoxy;
module.exports.MonitorChatBoxy = MonitorChatBoxy;
module.exports.default = MonitorChatBoxy;
