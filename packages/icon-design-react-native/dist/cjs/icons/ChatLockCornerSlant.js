'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatLockCornerSlant = forwardRef(function ChatLockCornerSlant(
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
    createElement(Path, {"d":"M11 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L8 18L8 22L14 18L19 18C20.305 18 21.402 17.164 21.816 16","key":"2"})
  );
});

ChatLockCornerSlant.displayName = 'ChatLockCornerSlant';

module.exports = ChatLockCornerSlant;
module.exports.ChatLockCornerSlant = ChatLockCornerSlant;
module.exports.default = ChatLockCornerSlant;
