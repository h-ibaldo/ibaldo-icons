'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackLetterTTooltip2 = forwardRef(function ChatStackLetterTTooltip2(
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
    createElement(Path, {"d":"M3 9L3 15C3 16.656 4.344 18 6 18L9 18L12 22L15 18L18 18C19.656 18 21 16.656 21 15L21 9C21 7.344 19.656 6 18 6L6 6C4.344 6 3 7.344 3 9Z","key":"0"}),
    createElement(Path, {"d":"M10.5 9L10.5 13C10.5 14.105 11.395 15 12.5 15L13.5 15","key":"1"}),
    createElement(Path, {"d":"M13.5 11L10.5 11","key":"2"}),
    createElement(Path, {"d":"M6 2L18 2","key":"3"})
  );
});

ChatStackLetterTTooltip2.displayName = 'ChatStackLetterTTooltip2';

module.exports = ChatStackLetterTTooltip2;
module.exports.ChatStackLetterTTooltip2 = ChatStackLetterTTooltip2;
module.exports.default = ChatStackLetterTTooltip2;
