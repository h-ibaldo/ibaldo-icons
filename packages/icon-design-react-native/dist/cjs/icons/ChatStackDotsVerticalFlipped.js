'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackDotsVerticalFlipped = forwardRef(function ChatStackDotsVerticalFlipped(
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
    createElement(Path, {"d":"M2 12L2 8C2 6.895 2.895 6 4 6L5 6L5 2L10 6L16 6C17.105 6 18 6.895 18 8L18 12C18 13.105 17.105 14 16 14L4 14C2.895 14 2 13.105 2 12Z","key":"0"}),
    createElement(Path, {"d":"M22 15L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L7 18","key":"1"}),
    createElement(Path, {"d":"M22 2L22 2","key":"2"}),
    createElement(Path, {"d":"M22 6L22 6","key":"3"}),
    createElement(Path, {"d":"M22 10L22 10","key":"4"})
  );
});

ChatStackDotsVerticalFlipped.displayName = 'ChatStackDotsVerticalFlipped';

module.exports = ChatStackDotsVerticalFlipped;
module.exports.ChatStackDotsVerticalFlipped = ChatStackDotsVerticalFlipped;
module.exports.default = ChatStackDotsVerticalFlipped;
