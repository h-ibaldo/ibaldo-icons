'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatSun = forwardRef(function ChatSun(
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
    createElement(Path, {"d":"M11.805 12C9.594 12 7.805 10.211 7.805 8C7.805 5.789 9.594 4 11.805 4C14.012 4 15.805 5.789 15.805 8C15.805 10.211 14.012 12 11.805 12Z","key":"0"}),
    createElement(Path, {"d":"M11.805 2L11.805 4","key":"1"}),
    createElement(Path, {"d":"M11.805 12L11.805 14","key":"2"}),
    createElement(Path, {"d":"M17 5L15.27 6","key":"3"}),
    createElement(Path, {"d":"M8.34 10L6.609 11","key":"4"}),
    createElement(Path, {"d":"M17 11L15.27 10","key":"5"}),
    createElement(Path, {"d":"M8.34 6L6.609 5","key":"6"}),
    createElement(Path, {"d":"M2.805 7.531C2.168 8.582 1.805 9.754 1.805 11C1.805 13.84 3.66 16.328 6.449 17.75C6.469 18.895 6.195 20.078 5.523 21.113C5.285 21.48 5.566 21.973 6 21.898C8.117 21.535 9.586 20.23 10.52 18.926C10.941 18.969 11.367 19 11.805 19C17.328 19 21.805 15.418 21.805 11C21.805 9.754 21.438 8.582 20.805 7.531","key":"7"})
  );
});

ChatSun.displayName = 'ChatSun';

module.exports = ChatSun;
module.exports.ChatSun = ChatSun;
module.exports.default = ChatSun;
