'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackMinusCornerStaggered = forwardRef(function ChatStackMinusCornerStaggered(
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
    createElement(Path, {"d":"M10 2L6 2C4.895 2 4 2.895 4 4L4 7L2 10L16 10C17.105 10 18 9.105 18 8","key":"0"}),
    createElement(Path, {"d":"M20 4L14 4","key":"1"}),
    createElement(Path, {"d":"M6 22L20 22C21.105 22 22 21.105 22 20L22 16C22 14.895 21.105 14 20 14L10 14C8.895 14 8 14.895 8 16L8 19Z","key":"2"})
  );
});

ChatStackMinusCornerStaggered.displayName = 'ChatStackMinusCornerStaggered';

module.exports = ChatStackMinusCornerStaggered;
module.exports.ChatStackMinusCornerStaggered = ChatStackMinusCornerStaggered;
module.exports.default = ChatStackMinusCornerStaggered;
