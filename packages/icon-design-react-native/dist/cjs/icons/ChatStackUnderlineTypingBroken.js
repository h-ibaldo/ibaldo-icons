'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackUnderlineTypingBroken = forwardRef(function ChatStackUnderlineTypingBroken(
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
    createElement(Path, {"d":"M17 2L5 2C3.344 2 2 3.344 2 5L2 11","key":"0"}),
    createElement(Path, {"d":"M14 18L17 16L19 16C20.656 16 22 14.656 22 13L22 9C22 7.344 20.656 6 19 6L9 6C7.344 6 6 7.344 6 9L6 13C6 14.656 7.344 16 9 16L11 16","key":"1"}),
    createElement(Path, {"d":"M19 22L9 22","key":"2"}),
    createElement(Path, {"d":"M10 11L10 11","key":"3"}),
    createElement(Path, {"d":"M14 11L14 11","key":"4"}),
    createElement(Path, {"d":"M18 11L18 11","key":"5"})
  );
});

ChatStackUnderlineTypingBroken.displayName = 'ChatStackUnderlineTypingBroken';

module.exports = ChatStackUnderlineTypingBroken;
module.exports.ChatStackUnderlineTypingBroken = ChatStackUnderlineTypingBroken;
module.exports.default = ChatStackUnderlineTypingBroken;
