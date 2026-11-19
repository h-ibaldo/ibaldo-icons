'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatStackSearchCorner = forwardRef(function ChatStackSearchCorner(
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
    createElement(Path, {"d":"M21 5.5C21 7.434 19.434 9 17.5 9C15.566 9 14 7.434 14 5.5C14 3.566 15.566 2 17.5 2C19.434 2 21 3.566 21 5.5Z","key":"0"}),
    createElement(Path, {"d":"M19.973 7.973L22 10","key":"1"}),
    createElement(Path, {"d":"M11 3.254C10.367 3.09 9.695 3 9 3C5.133 3 2 5.688 2 9C2 10.914 3.051 12.617 4.684 13.719C4.313 15.242 3.656 16.344 3 17C5.613 17 7.789 16.141 9.27 14.988C11.742 14.906 13.883 13.727 15.055 12","key":"2"}),
    createElement(Path, {"d":"M8.613 15.445C9.676 17.469 12 18.898 14.73 18.988C16.211 20.141 18.387 21 21 21C20.344 20.34 19.688 19.242 19.316 17.715C20.949 16.617 22 14.918 22 13","key":"3"})
  );
});

ChatStackSearchCorner.displayName = 'ChatStackSearchCorner';

module.exports = ChatStackSearchCorner;
module.exports.ChatStackSearchCorner = ChatStackSearchCorner;
module.exports.default = ChatStackSearchCorner;
