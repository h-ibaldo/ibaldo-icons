'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackOffFlipped = forwardRef(function ChatStackOffFlipped(
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
    createElement(Path, {"d":"M22 12L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L7 18","key":"0"}),
    createElement(Path, {"d":"M20 3L4 21","key":"1"}),
    createElement(Path, {"d":"M11.668 6L10 6L5 2L5 6L4 6C2.895 6 2 6.895 2 8L2 12C2 13.105 2.895 14 4 14L4.555 14","key":"2"}),
    createElement(Path, {"d":"M10.223 14L16 14C17.105 14 18 13.105 18 12L18 8C18 7.285 17.621 6.664 17.059 6.309","key":"3"})
  );
});

ChatStackOffFlipped.displayName = 'ChatStackOffFlipped';

module.exports = ChatStackOffFlipped;
module.exports.ChatStackOffFlipped = ChatStackOffFlipped;
module.exports.default = ChatStackOffFlipped;
