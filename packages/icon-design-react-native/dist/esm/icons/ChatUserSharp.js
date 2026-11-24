import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatUserSharp = forwardRef(function ChatUserSharp(
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
    createElement(Path, {"d":"M12 2C6.477 2 2 6.477 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z","key":"0"}),
    createElement(Path, {"d":"M14.5 10.5C14.5 11.883 13.383 13 12 13C10.617 13 9.5 11.883 9.5 10.5C9.5 9.117 10.617 8 12 8C13.383 8 14.5 9.117 14.5 10.5Z","key":"1"}),
    createElement(Path, {"d":"M16 16C16 14.344 14.656 13 13 13L11 13C9.344 13 8 14.344 8 16","key":"2"})
  );
});

ChatUserSharp.displayName = 'ChatUserSharp';

export default ChatUserSharp;
export { ChatUserSharp };
