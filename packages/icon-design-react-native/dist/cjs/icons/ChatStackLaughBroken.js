'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackLaughBroken = forwardRef(function ChatStackLaughBroken(
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
    createElement(Path, {"d":"M17 2L5 2C3.344 2 2 3.344 2 5L2 13","key":"0"}),
    createElement(Path, {"d":"M14 22L17 18L19 18C20.656 18 22 16.656 22 15L22 9C22 7.344 20.656 6 19 6L9 6C7.344 6 6 7.344 6 9L6 15C6 16.656 7.344 18 9 18L11 18","key":"1"}),
    createElement(Path, {"d":"M11 12L17 12C17 13.656 15.656 15 14 15C12.344 15 11 13.656 11 12Z","key":"2"}),
    createElement(Path, {"d":"M12 9L12 9","key":"3"}),
    createElement(Path, {"d":"M16 9L16 9","key":"4"})
  );
});

ChatStackLaughBroken.displayName = 'ChatStackLaughBroken';

module.exports = ChatStackLaughBroken;
module.exports.ChatStackLaughBroken = ChatStackLaughBroken;
module.exports.default = ChatStackLaughBroken;
