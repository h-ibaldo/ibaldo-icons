'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackTextNotch = forwardRef(function ChatStackTextNotch(
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
    createElement(Path, {"d":"M2 4L2 12C2 13.105 2.895 14 4 14L5 14L5 18L10 14L16 14C17.105 14 18 13.105 18 12L18 4C18 2.895 17.105 2 16 2L4 2C2.895 2 2 2.895 2 4Z","key":"0"}),
    createElement(Path, {"d":"M22 8L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L12 18","key":"1"}),
    createElement(Path, {"d":"M6 6L14 6","key":"2"}),
    createElement(Path, {"d":"M6 10L13 10","key":"3"})
  );
});

ChatStackTextNotch.displayName = 'ChatStackTextNotch';

module.exports = ChatStackTextNotch;
module.exports.ChatStackTextNotch = ChatStackTextNotch;
module.exports.default = ChatStackTextNotch;
