'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatTextSide = forwardRef(function ChatTextSide(
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
    createElement(Path, {"d":"M7 19L20 19C21.105 19 22 18.105 22 17L22 7C22 5.895 21.105 5 20 5L7 5C5.895 5 5 5.895 5 7L5 10L2 12L5 14L5 17C5 18.105 5.895 19 7 19Z","key":"0"}),
    createElement(Path, {"d":"M9 10L18 10","key":"1"}),
    createElement(Path, {"d":"M9 14L15 14","key":"2"})
  );
});

ChatTextSide.displayName = 'ChatTextSide';

module.exports = ChatTextSide;
module.exports.ChatTextSide = ChatTextSide;
module.exports.default = ChatTextSide;
