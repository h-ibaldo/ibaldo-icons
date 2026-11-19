'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatQuoteBroken = forwardRef(function ChatQuoteBroken(
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
    createElement(Path, {"d":"M14 7L17 7L17 9L14 9Z","key":"0"}),
    createElement(Path, {"d":"M14 13C15.723 12.539 17 10.93 17 9","key":"1"}),
    createElement(Path, {"d":"M7 7L10 7L10 9L7 9Z","key":"2"}),
    createElement(Path, {"d":"M7 13C8.723 12.539 10 10.93 10 9","key":"3"}),
    createElement(Path, {"d":"M12 22L15 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18","key":"4"})
  );
});

ChatQuoteBroken.displayName = 'ChatQuoteBroken';

module.exports = ChatQuoteBroken;
module.exports.ChatQuoteBroken = ChatQuoteBroken;
module.exports.default = ChatQuoteBroken;
