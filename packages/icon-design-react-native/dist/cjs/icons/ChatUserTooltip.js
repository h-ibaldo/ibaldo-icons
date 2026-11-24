'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatUserTooltip = forwardRef(function ChatUserTooltip(
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
    createElement(Path, {"d":"M2 5L2 15C2 16.656 3.344 18 5 18L8 18L12 22L16 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z","key":"0"}),
    createElement(Path, {"d":"M14.5 8.5C14.5 9.883 13.383 11 12 11C10.617 11 9.5 9.883 9.5 8.5C9.5 7.117 10.617 6 12 6C13.383 6 14.5 7.117 14.5 8.5Z","key":"1"}),
    createElement(Path, {"d":"M16 14C16 12.344 14.656 11 13 11L11 11C9.344 11 8 12.344 8 14","key":"2"})
  );
});

ChatUserTooltip.displayName = 'ChatUserTooltip';

module.exports = ChatUserTooltip;
module.exports.ChatUserTooltip = ChatUserTooltip;
module.exports.default = ChatUserTooltip;
