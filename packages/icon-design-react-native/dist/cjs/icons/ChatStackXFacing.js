'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackXFacing = forwardRef(function ChatStackXFacing(
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
    createElement(Path, {"d":"M7 10L11 6","key":"0"}),
    createElement(Path, {"d":"M11 10L7 6","key":"1"}),
    createElement(Path, {"d":"M2 4L2 17L7 14L14 14C15.105 14 16 13.105 16 12L16 4C16 2.895 15.105 2 14 2L4 2C2.895 2 2 2.895 2 4Z","key":"2"}),
    createElement(Path, {"d":"M19 8L20 8C21.105 8 22 8.895 22 10L22 22L17 19L10 19C8.895 19 8 18.105 8 17","key":"3"})
  );
});

ChatStackXFacing.displayName = 'ChatStackXFacing';

module.exports = ChatStackXFacing;
module.exports.ChatStackXFacing = ChatStackXFacing;
module.exports.default = ChatStackXFacing;
