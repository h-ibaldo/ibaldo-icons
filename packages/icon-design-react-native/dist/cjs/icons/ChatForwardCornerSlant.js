'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatForwardCornerSlant = forwardRef(function ChatForwardCornerSlant(
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
    createElement(Path, {"d":"M15 4L22 4","key":"0"}),
    createElement(Path, {"d":"M20 2L22 4L20 6","key":"1"}),
    createElement(Path, {"d":"M11 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L8 18L8 22L14 18L19 18C20.656 18 22 16.656 22 15L22 10","key":"2"})
  );
});

ChatForwardCornerSlant.displayName = 'ChatForwardCornerSlant';

module.exports = ChatForwardCornerSlant;
module.exports.ChatForwardCornerSlant = ChatForwardCornerSlant;
module.exports.default = ChatForwardCornerSlant;
