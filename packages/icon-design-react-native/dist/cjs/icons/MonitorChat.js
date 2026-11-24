'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const MonitorChat = forwardRef(function MonitorChat(
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
    createElement(Path, {"d":"M22 12L22 16C22 17.105 21.105 18 20 18L4 18C2.895 18 2 17.105 2 16L2 6.949C2 5.848 2.895 4.949 4 4.949L6 4.949","key":"0"}),
    createElement(Path, {"d":"M6 22L18 22","key":"1"}),
    createElement(Path, {"d":"M12 18L12 22","key":"2"}),
    createElement(Path, {"d":"M10 5.5C10 7.434 11.566 9 13.5 9L14 9L14 12L18 9L18.5 9C20.434 9 22 7.434 22 5.5C22 3.566 20.434 2 18.5 2L13.5 2C11.566 2 10 3.566 10 5.5Z","key":"3"})
  );
});

MonitorChat.displayName = 'MonitorChat';

module.exports = MonitorChat;
module.exports.MonitorChat = MonitorChat;
module.exports.default = MonitorChat;
