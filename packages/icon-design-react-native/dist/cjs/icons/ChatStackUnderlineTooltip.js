'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackUnderlineTooltip = forwardRef(function ChatStackUnderlineTooltip(
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
    createElement(Path, {"d":"M2 9L2 13C2 14.656 3.344 16 5 16L7 16L10 19L13 16L15 16C16.656 16 18 14.656 18 13L18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9Z","key":"0"}),
    createElement(Path, {"d":"M22 11L22 5C22 3.344 20.656 2 19 2L7 2","key":"1"}),
    createElement(Path, {"d":"M15 22L5 22","key":"2"})
  );
});

ChatStackUnderlineTooltip.displayName = 'ChatStackUnderlineTooltip';

module.exports = ChatStackUnderlineTooltip;
module.exports.ChatStackUnderlineTooltip = ChatStackUnderlineTooltip;
module.exports.default = ChatStackUnderlineTooltip;
