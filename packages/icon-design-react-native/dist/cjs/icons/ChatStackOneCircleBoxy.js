'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackOneCircleBoxy = forwardRef(function ChatStackOneCircleBoxy(
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
    createElement(Path, {"d":"M11 18L7 18L2 22L2 9C2 7.344 3.344 6 5 6L15 6C16.656 6 18 7.344 18 9L18 11","key":"0"}),
    createElement(Path, {"d":"M22 16.5C22 19.535 19.539 22 16.5 22C13.461 22 11 19.535 11 16.5C11 13.465 13.461 11 16.5 11C19.539 11 22 13.465 22 16.5Z","key":"1"}),
    createElement(Path, {"d":"M17 18L17 15L16 15","key":"2"}),
    createElement(Path, {"d":"M22 9L22 5C22 3.344 20.656 2 19 2L8 2","key":"3"})
  );
});

ChatStackOneCircleBoxy.displayName = 'ChatStackOneCircleBoxy';

module.exports = ChatStackOneCircleBoxy;
module.exports.ChatStackOneCircleBoxy = ChatStackOneCircleBoxy;
module.exports.default = ChatStackOneCircleBoxy;
