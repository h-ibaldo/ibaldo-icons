'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatCheckCornerWide = forwardRef(function ChatCheckCornerWide(
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
    createElement(Path, {"d":"M16 4L17.5 6L22 2","key":"0"}),
    createElement(Path, {"d":"M12 3L9 3C5.133 3 2 6.133 2 10C2 13.172 4.109 15.848 7 16.707L7 21L11.57 17L15 17C18.867 17 22 13.867 22 10C22 9.305 21.895 8.633 21.707 8","key":"1"})
  );
});

ChatCheckCornerWide.displayName = 'ChatCheckCornerWide';

module.exports = ChatCheckCornerWide;
module.exports.ChatCheckCornerWide = ChatCheckCornerWide;
module.exports.default = ChatCheckCornerWide;
