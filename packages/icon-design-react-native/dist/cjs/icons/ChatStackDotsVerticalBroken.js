'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackDotsVerticalBroken = forwardRef(function ChatStackDotsVerticalBroken(
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
    createElement(Path, {"d":"M18 6L9 6C7.344 6 6 7.344 6 9L6 15C6 16.656 7.344 18 9 18L11 18","key":"1"}),
    createElement(Path, {"d":"M14 22L17 18L19 18C20.656 18 22 16.656 22 15L22 14","key":"2"}),
    createElement(Path, {"d":"M22 2L22 2","key":"3"}),
    createElement(Path, {"d":"M22 6L22 6","key":"4"}),
    createElement(Path, {"d":"M22 10L22 10","key":"5"})
  );
});

ChatStackDotsVerticalBroken.displayName = 'ChatStackDotsVerticalBroken';

module.exports = ChatStackDotsVerticalBroken;
module.exports.ChatStackDotsVerticalBroken = ChatStackDotsVerticalBroken;
module.exports.default = ChatStackDotsVerticalBroken;
