'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ChatUser = forwardRef(function ChatUser(
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
    createElement(Path, {"d":"M14.5 9C14.5 10.383 13.383 11.5 12 11.5C10.617 11.5 9.5 10.383 9.5 9C9.5 7.617 10.617 6.5 12 6.5C13.383 6.5 14.5 7.617 14.5 9Z","key":"1"}),
    createElement(Path, {"d":"M16 14.5C16 12.844 14.656 11.5 13 11.5L11 11.5C9.344 11.5 8 12.844 8 14.5","key":"2"})
  );
});

ChatUser.displayName = 'ChatUser';

module.exports = ChatUser;
module.exports.ChatUser = ChatUser;
module.exports.default = ChatUser;
