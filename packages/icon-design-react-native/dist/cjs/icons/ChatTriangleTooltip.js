'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatTriangleTooltip = forwardRef(function ChatTriangleTooltip(
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
    createElement(Path, {"d":"M13.648 11L20.352 11C21.516 11 22.238 9.727 21.637 8.727L18.285 3.145C17.703 2.172 16.297 2.172 15.715 3.145L12.363 8.727C11.762 9.727 12.484 11 13.648 11Z","key":"0"}),
    createElement(Path, {"d":"M12 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L8 18L12 22L16 18L19 18C20.656 18 22 16.656 22 15L22 14","key":"1"})
  );
});

ChatTriangleTooltip.displayName = 'ChatTriangleTooltip';

module.exports = ChatTriangleTooltip;
module.exports.ChatTriangleTooltip = ChatTriangleTooltip;
module.exports.default = ChatTriangleTooltip;
