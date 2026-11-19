'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackHeartCornerBoxy = forwardRef(function ChatStackHeartCornerBoxy(
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
    createElement(Path, {"d":"M18 10L18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9L2 22L7 18L8 18","key":"0"}),
    createElement(Path, {"d":"M22 10L22 5C22 3.344 20.656 2 19 2L7 2","key":"1"}),
    createElement(Path, {"d":"M16.297 21.574L12.68 17.953C11.773 17.047 11.773 15.582 12.68 14.68L12.68 14.676C13.461 13.898 14.68 13.777 15.598 14.387L17 15.324L18.402 14.387C19.32 13.777 20.539 13.898 21.32 14.676L21.32 14.68C22.227 15.582 22.227 17.047 21.32 17.953L17.703 21.574C17.316 21.961 16.688 21.961 16.297 21.574Z","key":"2"})
  );
});

ChatStackHeartCornerBoxy.displayName = 'ChatStackHeartCornerBoxy';

module.exports = ChatStackHeartCornerBoxy;
module.exports.ChatStackHeartCornerBoxy = ChatStackHeartCornerBoxy;
module.exports.default = ChatStackHeartCornerBoxy;
