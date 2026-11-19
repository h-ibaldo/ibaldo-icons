'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatDotsVerticalTall = forwardRef(function ChatDotsVerticalTall(
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
    createElement(Path, {"d":"M22 2L22 2","key":"0"}),
    createElement(Path, {"d":"M22 6L22 6","key":"1"}),
    createElement(Path, {"d":"M22 10L22 10","key":"2"}),
    createElement(Path, {"d":"M17 3.762C15.629 2.66 13.895 2 12 2C7.582 2 4 5.582 4 10C4 14.418 7.582 18 12 18L12 22C15.465 20.613 17.797 17.988 19.012 15","key":"3"})
  );
});

ChatDotsVerticalTall.displayName = 'ChatDotsVerticalTall';

module.exports = ChatDotsVerticalTall;
module.exports.ChatDotsVerticalTall = ChatDotsVerticalTall;
module.exports.default = ChatDotsVerticalTall;
