'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatHappyTooltip = forwardRef(function ChatHappyTooltip(
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
    createElement(Path, {"d":"M10 7L10 8","key":"0"}),
    createElement(Path, {"d":"M14 7L14 8","key":"1"}),
    createElement(Path, {"d":"M7 10.652C8.191 12.086 9.988 13 12 13C14.012 13 15.809 12.086 17 10.652","key":"2"}),
    createElement(Path, {"d":"M2 5L2 15C2 16.656 3.344 18 5 18L8 18L12 22L16 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z","key":"3"})
  );
});

ChatHappyTooltip.displayName = 'ChatHappyTooltip';

module.exports = ChatHappyTooltip;
module.exports.ChatHappyTooltip = ChatHappyTooltip;
module.exports.default = ChatHappyTooltip;
