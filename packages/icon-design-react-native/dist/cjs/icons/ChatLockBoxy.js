'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatLockBoxy = forwardRef(function ChatLockBoxy(
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
    createElement(Path, {"d":"M2 5L2 22L7 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z","key":"0"}),
    createElement(Path, {"d":"M15 14L9 14L9 10L15 10Z","key":"1"}),
    createElement(Path, {"d":"M14 10L10 10L10 8C10 6.895 10.895 6 12 6C13.105 6 14 6.895 14 8Z","key":"2"})
  );
});

ChatLockBoxy.displayName = 'ChatLockBoxy';

module.exports = ChatLockBoxy;
module.exports.ChatLockBoxy = ChatLockBoxy;
module.exports.default = ChatLockBoxy;
