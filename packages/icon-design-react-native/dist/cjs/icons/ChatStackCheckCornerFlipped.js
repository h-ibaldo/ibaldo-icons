'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackCheckCornerFlipped = forwardRef(function ChatStackCheckCornerFlipped(
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
    createElement(Path, {"d":"M16 14L4 14C2.895 14 2 13.105 2 12L2 8C2 6.895 2.895 6 4 6L5 6L5 2L10 6L12 6","key":"0"}),
    createElement(Path, {"d":"M22 13L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L7 18","key":"1"}),
    createElement(Path, {"d":"M16 8L18 10L22 6","key":"2"})
  );
});

ChatStackCheckCornerFlipped.displayName = 'ChatStackCheckCornerFlipped';

module.exports = ChatStackCheckCornerFlipped;
module.exports.ChatStackCheckCornerFlipped = ChatStackCheckCornerFlipped;
module.exports.default = ChatStackCheckCornerFlipped;
