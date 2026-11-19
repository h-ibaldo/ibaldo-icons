'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackLaughTooltip = forwardRef(function ChatStackLaughTooltip(
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
    createElement(Path, {"d":"M2 9L2 15C2 16.656 3.344 18 5 18L7 18L10 22L13 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9Z","key":"0"}),
    createElement(Path, {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L7 2","key":"1"}),
    createElement(Path, {"d":"M7 12L13 12C13 13.656 11.656 15 10 15C8.344 15 7 13.656 7 12Z","key":"2"}),
    createElement(Path, {"d":"M8 9L8 9","key":"3"}),
    createElement(Path, {"d":"M12 9L12 9","key":"4"})
  );
});

ChatStackLaughTooltip.displayName = 'ChatStackLaughTooltip';

module.exports = ChatStackLaughTooltip;
module.exports.ChatStackLaughTooltip = ChatStackLaughTooltip;
module.exports.default = ChatStackLaughTooltip;
