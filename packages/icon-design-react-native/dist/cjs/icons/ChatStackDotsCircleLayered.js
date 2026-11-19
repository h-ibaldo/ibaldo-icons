'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackDotsCircleLayered = forwardRef(function ChatStackDotsCircleLayered(
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
    createElement(Path, {"d":"M18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9L2 22L7 18L9 18","key":"0"}),
    createElement(Path, {"d":"M5 6L5 5C5 3.344 6.344 2 8 2L19 2C20.656 2 22 3.344 22 5L22 10","key":"1"}),
    createElement(Path, {"d":"M22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17Z","key":"2"}),
    createElement(Path, {"d":"M15.5 17L15.5 17","key":"3"}),
    createElement(Path, {"d":"M18.5 17L18.5 17","key":"4"})
  );
});

ChatStackDotsCircleLayered.displayName = 'ChatStackDotsCircleLayered';

module.exports = ChatStackDotsCircleLayered;
module.exports.ChatStackDotsCircleLayered = ChatStackDotsCircleLayered;
module.exports.default = ChatStackDotsCircleLayered;
