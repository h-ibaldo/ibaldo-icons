'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatLockWide = forwardRef(function ChatLockWide(
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
    createElement(Path, {"d":"M15 3L9 3C5.133 3 2 6.133 2 10C2 13.172 4.109 15.848 7 16.707L7 21L11.57 17L15 17C18.867 17 22 13.867 22 10C22 6.133 18.867 3 15 3Z","key":"0"}),
    createElement(Path, {"d":"M15 14L9 14L9 10L15 10Z","key":"1"}),
    createElement(Path, {"d":"M14 10L10 10L10 8C10 6.895 10.895 6 12 6C13.105 6 14 6.895 14 8Z","key":"2"})
  );
});

ChatLockWide.displayName = 'ChatLockWide';

module.exports = ChatLockWide;
module.exports.ChatLockWide = ChatLockWide;
module.exports.default = ChatLockWide;
