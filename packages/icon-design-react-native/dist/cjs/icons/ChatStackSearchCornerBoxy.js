'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackSearchCornerBoxy = forwardRef(function ChatStackSearchCornerBoxy(
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
    createElement(Path, {"d":"M21 17.5C21 19.434 19.434 21 17.5 21C15.566 21 14 19.434 14 17.5C14 15.566 15.566 14 17.5 14C19.434 14 21 15.566 21 17.5Z","key":"0"}),
    createElement(Path, {"d":"M19.977 19.973L22 22","key":"1"}),
    createElement(Path, {"d":"M18 11L18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9L2 22L7 18L11 18","key":"2"}),
    createElement(Path, {"d":"M22 12L22 5C22 3.344 20.656 2 19 2L7 2","key":"3"})
  );
});

ChatStackSearchCornerBoxy.displayName = 'ChatStackSearchCornerBoxy';

module.exports = ChatStackSearchCornerBoxy;
module.exports.ChatStackSearchCornerBoxy = ChatStackSearchCornerBoxy;
module.exports.default = ChatStackSearchCornerBoxy;
