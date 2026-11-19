'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatCheckDoubleTall = forwardRef(function ChatCheckDoubleTall(
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
    createElement(Path, {"d":"M12 22C17.332 19.867 20 14.801 20 10C20 5.582 16.418 2 12 2C7.582 2 4 5.582 4 10C4 14.418 7.582 18 12 18Z","key":"0"}),
    createElement(Path, {"d":"M8 9L8.5 11L12 8","key":"1"}),
    createElement(Path, {"d":"M12.176 10.707L12.5 12L16 9","key":"2"})
  );
});

ChatCheckDoubleTall.displayName = 'ChatCheckDoubleTall';

module.exports = ChatCheckDoubleTall;
module.exports.ChatCheckDoubleTall = ChatCheckDoubleTall;
module.exports.default = ChatCheckDoubleTall;
