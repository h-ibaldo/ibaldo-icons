'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackDotsVerticalSlant = forwardRef(function ChatStackDotsVerticalSlant(
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
    createElement(Path, {"d":"M2 15C2 16.656 3.344 18 5 18L7 18L7 22L13 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.344 16.656 6 15 6L7 6","key":"0"}),
    createElement(Path, {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L7 2","key":"1"}),
    createElement(Path, {"d":"M2 2L2 2","key":"2"}),
    createElement(Path, {"d":"M2 6L2 6","key":"3"}),
    createElement(Path, {"d":"M2 10L2 10","key":"4"})
  );
});

ChatStackDotsVerticalSlant.displayName = 'ChatStackDotsVerticalSlant';

module.exports = ChatStackDotsVerticalSlant;
module.exports.ChatStackDotsVerticalSlant = ChatStackDotsVerticalSlant;
module.exports.default = ChatStackDotsVerticalSlant;
