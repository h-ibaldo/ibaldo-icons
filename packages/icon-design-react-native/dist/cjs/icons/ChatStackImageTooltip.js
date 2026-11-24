'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackImageTooltip = forwardRef(function ChatStackImageTooltip(
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
    createElement(Path, {"d":"M5 13L7 11L11 15","key":"2"}),
    createElement(Path, {"d":"M11 15L13 13L15 15","key":"3"}),
    createElement(Path, {"d":"M11 9.5C11 9.223 11.223 9 11.5 9C11.777 9 12 9.223 12 9.5C12 9.777 11.777 10 11.5 10","key":"4"})
  );
});

ChatStackImageTooltip.displayName = 'ChatStackImageTooltip';

module.exports = ChatStackImageTooltip;
module.exports.ChatStackImageTooltip = ChatStackImageTooltip;
module.exports.default = ChatStackImageTooltip;
