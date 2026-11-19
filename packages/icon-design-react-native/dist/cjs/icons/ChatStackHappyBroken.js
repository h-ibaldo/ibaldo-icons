'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackHappyBroken = forwardRef(function ChatStackHappyBroken(
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
    createElement(Path, {"d":"M17 2L5 2C3.344 2 2 3.344 2 5L2 13","key":"0"}),
    createElement(Path, {"d":"M14 22L17 18L19 18C20.656 18 22 16.656 22 15L22 9C22 7.344 20.656 6 19 6L9 6C7.344 6 6 7.344 6 9L6 15C6 16.656 7.344 18 9 18L11 18","key":"1"}),
    createElement(Path, {"d":"M12 10L12 11","key":"2"}),
    createElement(Path, {"d":"M16 10L16 11","key":"3"}),
    createElement(Path, {"d":"M10 13.922C11.18 14.605 12.539 15 14 15C15.461 15 16.82 14.605 18 13.922","key":"4"})
  );
});

ChatStackHappyBroken.displayName = 'ChatStackHappyBroken';

module.exports = ChatStackHappyBroken;
module.exports.ChatStackHappyBroken = ChatStackHappyBroken;
module.exports.default = ChatStackHappyBroken;
