'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatForwardCornerSharp = forwardRef(function ChatForwardCornerSharp(
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
    createElement(Path, {"d":"M11 2.051C5.945 2.551 2 6.816 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C17.523 22 22 17.523 22 12C22 11.316 21.93 10.645 21.801 10","key":"2"})
  );
});

ChatForwardCornerSharp.displayName = 'ChatForwardCornerSharp';

module.exports = ChatForwardCornerSharp;
module.exports.ChatForwardCornerSharp = ChatForwardCornerSharp;
module.exports.default = ChatForwardCornerSharp;
