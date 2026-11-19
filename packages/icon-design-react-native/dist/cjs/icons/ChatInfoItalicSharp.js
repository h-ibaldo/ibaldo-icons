'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatInfoItalicSharp = forwardRef(function ChatInfoItalicSharp(
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
    createElement(Path, {"d":"M10.5 12L10.918 11.582C11.238 11.262 11.762 11.262 12.082 11.582C12.332 11.832 12.395 12.215 12.234 12.531L10.766 15.469C10.605 15.785 10.668 16.168 10.918 16.418C11.238 16.738 11.762 16.738 12.082 16.418L12.5 16","key":"1"}),
    createElement(Path, {"d":"M13 7.5C13 7.777 12.777 8 12.5 8C12.223 8 12 7.777 12 7.5C12 7.223 12.223 7 12.5 7C12.777 7 13 7.223 13 7.5Z","key":"2"})
  );
});

ChatInfoItalicSharp.displayName = 'ChatInfoItalicSharp';

module.exports = ChatInfoItalicSharp;
module.exports.ChatInfoItalicSharp = ChatInfoItalicSharp;
module.exports.default = ChatInfoItalicSharp;
