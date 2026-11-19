'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatTypingTall = forwardRef(function ChatTypingTall(
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
    createElement(Path, {"d":"M12 22C17.332 19.867 20 14.801 20 10C20 5.582 16.418 2 12 2C7.582 2 4 5.582 4 10C4 14.418 7.582 18 12 18Z","key":"0"}),
    createElement(Path, {"d":"M9 10L9 10","key":"1"}),
    createElement(Path, {"d":"M12 10L12 10","key":"2"}),
    createElement(Path, {"d":"M15 10L15 10","key":"3"})
  );
});

ChatTypingTall.displayName = 'ChatTypingTall';

module.exports = ChatTypingTall;
module.exports.ChatTypingTall = ChatTypingTall;
module.exports.default = ChatTypingTall;
