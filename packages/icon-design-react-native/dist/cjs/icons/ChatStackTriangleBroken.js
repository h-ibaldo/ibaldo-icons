'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackTriangleBroken = forwardRef(function ChatStackTriangleBroken(
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
    createElement(Path, {"d":"M13.648 11L20.352 11C21.516 11 22.238 9.73 21.637 8.73L18.285 3.145C17.703 2.172 16.297 2.172 15.715 3.145L12.363 8.73C11.762 9.73 12.484 11 13.648 11Z","key":"0"}),
    createElement(Path, {"d":"M12 2L5 2C3.344 2 2 3.344 2 5L2 13","key":"1"}),
    createElement(Path, {"d":"M10 6L9 6C7.344 6 6 7.344 6 9L6 15C6 16.656 7.344 18 9 18L11 18","key":"2"}),
    createElement(Path, {"d":"M14 22L17 18L19 18C20.656 18 22 16.656 22 15L22 14","key":"3"})
  );
});

ChatStackTriangleBroken.displayName = 'ChatStackTriangleBroken';

module.exports = ChatStackTriangleBroken;
module.exports.ChatStackTriangleBroken = ChatStackTriangleBroken;
module.exports.default = ChatStackTriangleBroken;
