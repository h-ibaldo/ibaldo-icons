'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackLaughNotch = forwardRef(function ChatStackLaughNotch(
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
    createElement(Path, {"d":"M7 9L13 9C13 10.656 11.656 12 10 12C8.344 12 7 10.656 7 9Z","key":"0"}),
    createElement(Path, {"d":"M8 6L8 6","key":"1"}),
    createElement(Path, {"d":"M12 6L12 6","key":"2"}),
    createElement(Path, {"d":"M2 4L2 13C2 14.105 2.895 15 4 15L5 15L5 18L10 15L16 15C17.105 15 18 14.105 18 13L18 4C18 2.895 17.105 2 16 2L4 2C2.895 2 2 2.895 2 4Z","key":"3"}),
    createElement(Path, {"d":"M22 8L22 17C22 18.105 21.105 19 20 19L19 19L19 22L14 19L12 19","key":"4"})
  );
});

ChatStackLaughNotch.displayName = 'ChatStackLaughNotch';

module.exports = ChatStackLaughNotch;
module.exports.ChatStackLaughNotch = ChatStackLaughNotch;
module.exports.default = ChatStackLaughNotch;
