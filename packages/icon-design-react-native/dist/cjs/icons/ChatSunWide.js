'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatSunWide = forwardRef(function ChatSunWide(
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
    createElement(Path, {"d":"M17 12C14.789 12 13 10.211 13 8C13 5.789 14.789 4 17 4C19.211 4 21 5.789 21 8C21 10.211 19.211 12 17 12Z","key":"0"}),
    createElement(Path, {"d":"M17 2L17 4","key":"1"}),
    createElement(Path, {"d":"M17 12L17 14","key":"2"}),
    createElement(Path, {"d":"M22.195 5L20.465 6","key":"3"}),
    createElement(Path, {"d":"M13.535 10L11.805 11","key":"4"}),
    createElement(Path, {"d":"M22.195 11L20.465 10","key":"5"}),
    createElement(Path, {"d":"M13.535 6L11.805 5","key":"6"}),
    createElement(Path, {"d":"M8 4.078C4.609 4.566 2 7.477 2 11C2 14.172 4.109 16.848 7 17.707L7 22L11.57 18L15 18C16.965 18 18.73 17.18 20 15.879","key":"7"})
  );
});

ChatSunWide.displayName = 'ChatSunWide';

module.exports = ChatSunWide;
module.exports.ChatSunWide = ChatSunWide;
module.exports.default = ChatSunWide;
