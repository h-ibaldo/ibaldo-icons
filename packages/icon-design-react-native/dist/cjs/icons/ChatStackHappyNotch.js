'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackHappyNotch = forwardRef(function ChatStackHappyNotch(
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
    createElement(Path, {"d":"M8 6L8 7","key":"0"}),
    createElement(Path, {"d":"M12 6L12 7","key":"1"}),
    createElement(Path, {"d":"M6 9.922C7.18 10.605 8.539 11 10 11C11.461 11 12.82 10.605 14 9.922","key":"2"}),
    createElement(Path, {"d":"M2 4L2 13C2 14.105 2.895 15 4 15L5 15L5 18L10 15L16 15C17.105 15 18 14.105 18 13L18 4C18 2.895 17.105 2 16 2L4 2C2.895 2 2 2.895 2 4Z","key":"3"}),
    createElement(Path, {"d":"M22 8L22 17C22 18.105 21.105 19 20 19L19 19L19 22L14 19L12 19","key":"4"})
  );
});

ChatStackHappyNotch.displayName = 'ChatStackHappyNotch';

module.exports = ChatStackHappyNotch;
module.exports.ChatStackHappyNotch = ChatStackHappyNotch;
module.exports.default = ChatStackHappyNotch;
