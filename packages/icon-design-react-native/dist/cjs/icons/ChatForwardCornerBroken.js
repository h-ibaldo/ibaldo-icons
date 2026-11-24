'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatForwardCornerBroken = forwardRef(function ChatForwardCornerBroken(
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
    createElement(Path, {"d":"M11 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18","key":"0"}),
    createElement(Path, {"d":"M22 10L22 15C22 16.656 20.656 18 19 18L15 18L12 22","key":"1"}),
    createElement(Path, {"d":"M15 4L22 4","key":"2"}),
    createElement(Path, {"d":"M20 2L22 4L20 6","key":"3"})
  );
});

ChatForwardCornerBroken.displayName = 'ChatForwardCornerBroken';

module.exports = ChatForwardCornerBroken;
module.exports.ChatForwardCornerBroken = ChatForwardCornerBroken;
module.exports.default = ChatForwardCornerBroken;
