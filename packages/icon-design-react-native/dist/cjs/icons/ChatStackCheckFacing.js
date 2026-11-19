'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackCheckFacing = forwardRef(function ChatStackCheckFacing(
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
    createElement(Path, {"d":"M2.105 4L2.105 18L7.105 14L16.105 14C17.211 14 18.105 13.105 18.105 12L18.105 4C18.105 2.895 17.211 2 16.105 2L4.105 2C3.004 2 2.105 2.895 2.105 4Z","key":"0"}),
    createElement(Path, {"d":"M8.105 17C8.105 18.105 9.004 19 10.105 19L17.105 19L22.105 22L22.105 10.414C22.105 9.508 21.746 8.641 21.105 8","key":"1"}),
    createElement(Path, {"d":"M7 8L8.5 10L13 6","key":"2"})
  );
});

ChatStackCheckFacing.displayName = 'ChatStackCheckFacing';

module.exports = ChatStackCheckFacing;
module.exports.ChatStackCheckFacing = ChatStackCheckFacing;
module.exports.default = ChatStackCheckFacing;
