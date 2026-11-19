'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatReplyAllSlant = forwardRef(function ChatReplyAllSlant(
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
    createElement(Path, {"d":"M2 5L2 15C2 16.656 3.344 18 5 18L8 18L8 22L14 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z","key":"0"}),
    createElement(Path, {"d":"M13.023 11L11.023 9L13.023 7","key":"1"}),
    createElement(Path, {"d":"M9.023 11L7.023 9L9.023 7","key":"2"}),
    createElement(Path, {"d":"M11.023 9L14.023 9C15.68 9 17.023 10.344 17.023 12L17.023 13","key":"3"})
  );
});

ChatReplyAllSlant.displayName = 'ChatReplyAllSlant';

module.exports = ChatReplyAllSlant;
module.exports.ChatReplyAllSlant = ChatReplyAllSlant;
module.exports.default = ChatReplyAllSlant;
