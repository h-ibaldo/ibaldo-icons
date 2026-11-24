'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackDotsCircleBroken = forwardRef(function ChatStackDotsCircleBroken(
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
    createElement(Path, {"d":"M22 7C22 9.762 19.762 12 17 12C14.238 12 12 9.762 12 7C12 4.238 14.238 2 17 2C19.762 2 22 4.238 22 7Z","key":"0"}),
    createElement(Path, {"d":"M10 2L5 2C3.344 2 2 3.344 2 5L2 13","key":"1"}),
    createElement(Path, {"d":"M9 6C7.344 6 6 7.344 6 9L6 15C6 16.656 7.344 18 9 18L11 18","key":"2"}),
    createElement(Path, {"d":"M14 22L17 18L19 18C20.656 18 22 16.656 22 15L22 14","key":"3"}),
    createElement(Path, {"d":"M15.5 7L15.5 7","key":"4"}),
    createElement(Path, {"d":"M18.5 7L18.5 7","key":"5"})
  );
});

ChatStackDotsCircleBroken.displayName = 'ChatStackDotsCircleBroken';

module.exports = ChatStackDotsCircleBroken;
module.exports.ChatStackDotsCircleBroken = ChatStackDotsCircleBroken;
module.exports.default = ChatStackDotsCircleBroken;
