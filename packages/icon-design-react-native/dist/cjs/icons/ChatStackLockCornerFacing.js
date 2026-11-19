'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackLockCornerFacing = forwardRef(function ChatStackLockCornerFacing(
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
    createElement(Path, {"d":"M12 2L4 2C2.895 2 2 2.895 2 4L2 17L7 13L10 13","key":"2"}),
    createElement(Path, {"d":"M22 16L22 22L17 18L10 18C8.895 18 8 17.105 8 16","key":"3"})
  );
});

ChatStackLockCornerFacing.displayName = 'ChatStackLockCornerFacing';

module.exports = ChatStackLockCornerFacing;
module.exports.ChatStackLockCornerFacing = ChatStackLockCornerFacing;
module.exports.default = ChatStackLockCornerFacing;
