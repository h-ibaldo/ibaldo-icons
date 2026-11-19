'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackUnderlineBoxy = forwardRef(function ChatStackUnderlineBoxy(
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
    createElement(Path, {"d":"M12 22L2 22","key":"0"}),
    createElement(Path, {"d":"M2 9L2 18L5 16L15 16C16.656 16 18 14.656 18 13L18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9Z","key":"1"}),
    createElement(Path, {"d":"M22 10L22 5C22 3.344 20.656 2 19 2L8 2","key":"2"})
  );
});

ChatStackUnderlineBoxy.displayName = 'ChatStackUnderlineBoxy';

module.exports = ChatStackUnderlineBoxy;
module.exports.ChatStackUnderlineBoxy = ChatStackUnderlineBoxy;
module.exports.default = ChatStackUnderlineBoxy;
