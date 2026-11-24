'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatLockCornerRound = forwardRef(function ChatLockCornerRound(
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
    createElement(Path, {"d":"M22 12L14 12L14 7L22 7Z","key":"0"}),
    createElement(Path, {"d":"M15 7L15 5C15 3.344 16.344 2 18 2C19.656 2 21 3.344 21 5L21 7","key":"1"}),
    createElement(Path, {"d":"M11 2.051C5.945 2.551 2 6.816 2 12C2 14.625 3.02 17.008 4.676 18.793L2 22L12 22C16.102 22 19.617 19.531 21.164 16","key":"2"})
  );
});

ChatLockCornerRound.displayName = 'ChatLockCornerRound';

module.exports = ChatLockCornerRound;
module.exports.ChatLockCornerRound = ChatLockCornerRound;
module.exports.default = ChatLockCornerRound;
