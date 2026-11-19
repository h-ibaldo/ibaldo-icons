'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackTriangleBoxy = forwardRef(function ChatStackTriangleBoxy(
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
    createElement(Path, {"d":"M13.648 22L20.352 22C21.516 22 22.238 20.73 21.637 19.73L18.285 14.145C17.703 13.172 16.297 13.172 15.715 14.145L12.363 19.73C11.762 20.73 12.484 22 13.648 22Z","key":"0"}),
    createElement(Path, {"d":"M9 18L7 18L2 22L2 9C2 7.344 3.344 6 5 6L15 6C16.656 6 18 7.344 18 9L18 10","key":"1"}),
    createElement(Path, {"d":"M22 13L22 5C22 3.344 20.656 2 19 2L8 2","key":"2"})
  );
});

ChatStackTriangleBoxy.displayName = 'ChatStackTriangleBoxy';

module.exports = ChatStackTriangleBoxy;
module.exports.ChatStackTriangleBoxy = ChatStackTriangleBoxy;
module.exports.default = ChatStackTriangleBoxy;
