'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatLetters = forwardRef(function ChatLetters(
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
    createElement(Path, {"d":"M18 4.613C16.328 3.605 14.258 3 12 3C6.477 3 2 6.582 2 11C2 13.84 3.855 16.328 6.645 17.75C6.664 18.895 6.395 20.078 5.719 21.113C5.48 21.48 5.766 21.973 6.195 21.898C8.313 21.535 9.781 20.23 10.715 18.926C11.137 18.969 11.563 19 12 19C14.258 19 16.328 18.395 18 17.387","key":"0"}),
    createElement(Path, {"d":"M14.5 14C13.672 14 13 13.328 13 12.5L13 9.5C13 8.672 13.672 8 14.5 8C15.328 8 16 8.672 16 9.5L16 12.5C16 13.328 15.328 14 14.5 14Z","key":"1"}),
    createElement(Path, {"d":"M7.5 14L8.5 14C9.328 14 10 13.328 10 12.5C10 11.672 9.328 11 8.5 11C7.672 11 7 10.328 7 9.5C7 8.672 7.672 8 8.5 8L9.5 8","key":"2"}),
    createElement(Path, {"d":"M19.5 14L20.5 14C21.328 14 22 13.328 22 12.5C22 11.672 21.328 11 20.5 11C19.672 11 19 10.328 19 9.5C19 8.672 19.672 8 20.5 8L21.5 8","key":"3"})
  );
});

ChatLetters.displayName = 'ChatLetters';

module.exports = ChatLetters;
module.exports.ChatLetters = ChatLetters;
module.exports.default = ChatLetters;
