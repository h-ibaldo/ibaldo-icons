'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackClockFacing = forwardRef(function ChatStackClockFacing(
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
    createElement(Path, {"d":"M10 2L4 2C2.895 2 2 2.895 2 4L2 17L7 13L11 13","key":"0"}),
    createElement(Path, {"d":"M22 14L22 22L17 18L10 18C8.895 18 8 17.105 8 16","key":"1"}),
    createElement(Path, {"d":"M22 7C22 9.762 19.762 12 17 12C14.238 12 12 9.762 12 7C12 4.238 14.238 2 17 2C19.762 2 22 4.238 22 7Z","key":"2"}),
    createElement(Path, {"d":"M19 7L17 7L17 5","key":"3"})
  );
});

ChatStackClockFacing.displayName = 'ChatStackClockFacing';

module.exports = ChatStackClockFacing;
module.exports.ChatStackClockFacing = ChatStackClockFacing;
module.exports.default = ChatStackClockFacing;
