'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatSearchSharp = forwardRef(function ChatSearchSharp(
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
    createElement(Path, {"d":"M12 2C6.477 2 2 6.477 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z","key":"0"}),
    createElement(Path, {"d":"M15 11.5C15 13.434 13.434 15 11.5 15C9.566 15 8 13.434 8 11.5C8 9.566 9.566 8 11.5 8C13.434 8 15 9.566 15 11.5Z","key":"1"}),
    createElement(Path, {"d":"M13.973 13.977L16 16","key":"2"})
  );
});

ChatSearchSharp.displayName = 'ChatSearchSharp';

module.exports = ChatSearchSharp;
module.exports.ChatSearchSharp = ChatSearchSharp;
module.exports.default = ChatSearchSharp;
