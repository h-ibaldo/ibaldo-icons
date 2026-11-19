'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatTextLargeFlat = forwardRef(function ChatTextLargeFlat(
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
    createElement(Path, {"d":"M9 12L18 12","key":"0"}),
    createElement(Path, {"d":"M9 8L18 8","key":"1"}),
    createElement(Path, {"d":"M9 16L15 16","key":"2"}),
    createElement(Path, {"d":"M20 20C21.105 20 22 19.105 22 18L22 6C22 4.895 21.105 4 20 4L7 4C5.895 4 5 4.895 5 6L5 16L2 20Z","key":"3"})
  );
});

ChatTextLargeFlat.displayName = 'ChatTextLargeFlat';

module.exports = ChatTextLargeFlat;
module.exports.ChatTextLargeFlat = ChatTextLargeFlat;
module.exports.default = ChatTextLargeFlat;
