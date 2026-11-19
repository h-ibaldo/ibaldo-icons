'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackLockCornerBoxy = forwardRef(function ChatStackLockCornerBoxy(
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
    createElement(Path, {"d":"M2 16L2 22L7 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.344 16.656 6 15 6L14 6","key":"0"}),
    createElement(Path, {"d":"M22 13L22 5C22 3.344 20.656 2 19 2L12 2","key":"1"}),
    createElement(Path, {"d":"M10 12L2 12L2 7L10 7Z","key":"2"}),
    createElement(Path, {"d":"M3 7L3 5C3 3.344 4.344 2 6 2C7.656 2 9 3.344 9 5L9 7","key":"3"})
  );
});

ChatStackLockCornerBoxy.displayName = 'ChatStackLockCornerBoxy';

module.exports = ChatStackLockCornerBoxy;
module.exports.ChatStackLockCornerBoxy = ChatStackLockCornerBoxy;
module.exports.default = ChatStackLockCornerBoxy;
