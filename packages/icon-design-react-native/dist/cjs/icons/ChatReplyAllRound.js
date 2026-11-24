'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatReplyAllRound = forwardRef(function ChatReplyAllRound(
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
    createElement(Path, {"d":"M12 2C6.477 2 2 6.477 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z","key":"0"}),
    createElement(Path, {"d":"M13.023 13.02L11.023 11.02L13.023 9.02","key":"1"}),
    createElement(Path, {"d":"M9.023 13.02L7.023 11.02L9.023 9.02","key":"2"}),
    createElement(Path, {"d":"M11.023 11.02L14.023 11.02C15.68 11.02 17.023 12.363 17.023 14.02L17.023 15.02","key":"3"})
  );
});

ChatReplyAllRound.displayName = 'ChatReplyAllRound';

module.exports = ChatReplyAllRound;
module.exports.ChatReplyAllRound = ChatReplyAllRound;
module.exports.default = ChatReplyAllRound;
