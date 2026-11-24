'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStarCornerWide = forwardRef(function ChatStarCornerWide(
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
    createElement(Path, {"d":"M16.426 2.266L17.785 5.02L20.824 5.461C21.215 5.52 21.371 5.996 21.09 6.27L18.891 8.414L19.406 11.445C19.477 11.832 19.066 12.125 18.719 11.945L16 10.516L13.281 11.945C12.934 12.125 12.527 11.832 12.594 11.445L13.113 8.414L10.91 6.27C10.629 5.996 10.785 5.52 11.172 5.461L14.215 5.02L15.574 2.266C15.75 1.91 16.25 1.91 16.426 2.266Z","key":"0"}),
    createElement(Path, {"d":"M9 3.027C5.094 3.285 2 6.527 2 10.5C2 13.762 4.09 16.535 7 17.563L7 22L11.668 18L14.5 18C16.949 18 19.121 16.82 20.488 15","key":"1"})
  );
});

ChatStarCornerWide.displayName = 'ChatStarCornerWide';

module.exports = ChatStarCornerWide;
module.exports.ChatStarCornerWide = ChatStarCornerWide;
module.exports.default = ChatStarCornerWide;
