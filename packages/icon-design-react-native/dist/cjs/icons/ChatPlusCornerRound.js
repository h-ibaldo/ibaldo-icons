'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatPlusCornerRound = forwardRef(function ChatPlusCornerRound(
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
    createElement(Path, {"d":"M19 2L19 8","key":"0"}),
    createElement(Path, {"d":"M22 5L16 5","key":"1"}),
    createElement(Path, {"d":"M13 2.051C12.672 2.016 12.336 2 12 2C6.477 2 2 6.477 2 12C2 14.625 3.02 17.008 4.676 18.793L2 22L12 22C17.523 22 22 17.523 22 12C22 11.664 21.98 11.328 21.949 11","key":"2"})
  );
});

ChatPlusCornerRound.displayName = 'ChatPlusCornerRound';

module.exports = ChatPlusCornerRound;
module.exports.ChatPlusCornerRound = ChatPlusCornerRound;
module.exports.default = ChatPlusCornerRound;
