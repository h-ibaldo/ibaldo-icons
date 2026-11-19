'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatEyeBroken = forwardRef(function ChatEyeBroken(
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
    createElement(Path, {"d":"M15.531 7.5C14.98 7.5 14.531 7.051 14.531 6.5C14.531 5.949 14.98 5.5 15.531 5.5C16.086 5.5 16.531 5.949 16.531 6.5C16.531 7.051 16.086 7.5 15.531 7.5Z","key":"0"}),
    createElement(Path, {"d":"M15.531 2C12.547 2 10.008 3.871 9 6.5C10.008 9.129 12.547 11 15.531 11C18.516 11 21.059 9.129 22.063 6.5C21.059 3.871 18.516 2 15.531 2Z","key":"1"}),
    createElement(Path, {"d":"M8 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18","key":"2"}),
    createElement(Path, {"d":"M22 12L22 15C22 16.656 20.656 18 19 18L15 18L12 22","key":"3"})
  );
});

ChatEyeBroken.displayName = 'ChatEyeBroken';

module.exports = ChatEyeBroken;
module.exports.ChatEyeBroken = ChatEyeBroken;
module.exports.default = ChatEyeBroken;
