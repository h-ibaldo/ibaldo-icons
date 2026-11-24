'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackDotsVerticalLayered = forwardRef(function ChatStackDotsVerticalLayered(
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
    createElement(Path, {"d":"M2 9L2 22L7 18L14 18C15.656 18 17 16.656 17 15L17 9C17 7.344 15.656 6 14 6L5 6C3.344 6 2 7.344 2 9Z","key":"0"}),
    createElement(Path, {"d":"M20 14L17 14","key":"1"}),
    createElement(Path, {"d":"M5 6L5 5C5 3.344 6.344 2 8 2L18 2","key":"2"}),
    createElement(Path, {"d":"M22 2L22 2","key":"3"}),
    createElement(Path, {"d":"M22 6L22 6","key":"4"}),
    createElement(Path, {"d":"M22 10L22 10","key":"5"})
  );
});

ChatStackDotsVerticalLayered.displayName = 'ChatStackDotsVerticalLayered';

module.exports = ChatStackDotsVerticalLayered;
module.exports.ChatStackDotsVerticalLayered = ChatStackDotsVerticalLayered;
module.exports.default = ChatStackDotsVerticalLayered;
