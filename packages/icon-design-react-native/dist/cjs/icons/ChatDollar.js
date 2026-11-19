'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatDollar = forwardRef(function ChatDollar(
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
    createElement(Path, {"d":"M12 3C6.477 3 2 6.582 2 11C2 13.84 3.855 16.328 6.645 17.75C6.664 18.895 6.391 20.078 5.719 21.113C5.48 21.48 5.766 21.973 6.195 21.898C8.313 21.535 9.781 20.23 10.715 18.926C11.137 18.969 11.563 19 12 19C17.523 19 22 15.418 22 11C22 6.582 17.523 3 12 3Z","key":"0"}),
    createElement(Path, {"d":"M14 7.5L13.449 7.316C12.82 7.105 12.16 7 11.5 7C10.395 7 9.5 7.895 9.5 9C9.5 10.105 10.395 11 11.5 11L12.5 11C13.605 11 14.5 11.895 14.5 13C14.5 14.105 13.605 15 12.5 15C11.84 15 11.18 14.895 10.551 14.684L10 14.5","key":"1"}),
    createElement(Path, {"d":"M12 6L12 7","key":"2"}),
    createElement(Path, {"d":"M12 15L12 16","key":"3"})
  );
});

ChatDollar.displayName = 'ChatDollar';

module.exports = ChatDollar;
module.exports.ChatDollar = ChatDollar;
module.exports.default = ChatDollar;
