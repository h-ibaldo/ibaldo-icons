'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackEditFlipped = forwardRef(function ChatStackEditFlipped(
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
    createElement(Path, {"d":"M18 13C18 14.105 17.105 15 16 15L4 15C2.895 15 2 14.105 2 13L2 7C2 5.895 2.895 5 4 5L5 5L5 2L10 5","key":"0"}),
    createElement(Path, {"d":"M22 11L22 17C22 18.105 21.105 19 20 19L19 19L19 22L14 19L7 19","key":"1"}),
    createElement(Path, {"d":"M20.414 2.586L20.586 2.758C21.367 3.539 21.367 4.805 20.586 5.586L15 11L12 11L12 8L17.586 2.586C18.367 1.805 19.633 1.805 20.414 2.586Z","key":"2"}),
    createElement(Path, {"d":"M16 4.172L19 7.172","key":"3"})
  );
});

ChatStackEditFlipped.displayName = 'ChatStackEditFlipped';

module.exports = ChatStackEditFlipped;
module.exports.ChatStackEditFlipped = ChatStackEditFlipped;
module.exports.default = ChatStackEditFlipped;
