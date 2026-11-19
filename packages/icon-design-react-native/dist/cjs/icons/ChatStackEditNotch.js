'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackEditNotch = forwardRef(function ChatStackEditNotch(
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
    createElement(Path, {"d":"M2 10L2 12C2 13.105 2.895 14 4 14L5 14L5 18L10 14L16 14C17.105 14 18 13.105 18 12L18 4C18 2.895 17.105 2 16 2L10 2","key":"0"}),
    createElement(Path, {"d":"M22 8L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L12 18","key":"1"}),
    createElement(Path, {"d":"M2.707 4.293L4.293 2.707C4.684 2.316 5.316 2.316 5.707 2.707L10 7L10 10L7 10L2.707 5.707C2.316 5.316 2.316 4.684 2.707 4.293Z","key":"2"})
  );
});

ChatStackEditNotch.displayName = 'ChatStackEditNotch';

module.exports = ChatStackEditNotch;
module.exports.ChatStackEditNotch = ChatStackEditNotch;
module.exports.default = ChatStackEditNotch;
