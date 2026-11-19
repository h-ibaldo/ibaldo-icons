'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackDotFlipped = forwardRef(function ChatStackDotFlipped(
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
    createElement(Path, {"d":"M18 12C18 13.105 17.105 14 16 14L4 14C2.895 14 2 13.105 2 12L2 8C2 6.895 2.895 6 4 6L5 6L5 2L10 6L12 6","key":"0"}),
    createElement(Path, {"d":"M22 12L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L7 18","key":"1"}),
    createElement(Path, {"d":"M16 5C16 6.656 17.344 8 19 8C20.656 8 22 6.656 22 5C22 3.344 20.656 2 19 2C17.344 2 16 3.344 16 5Z","key":"2"})
  );
});

ChatStackDotFlipped.displayName = 'ChatStackDotFlipped';

module.exports = ChatStackDotFlipped;
module.exports.ChatStackDotFlipped = ChatStackDotFlipped;
module.exports.default = ChatStackDotFlipped;
