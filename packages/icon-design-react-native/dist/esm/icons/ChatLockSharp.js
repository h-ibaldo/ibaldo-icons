import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatLockSharp = forwardRef(function ChatLockSharp(
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
    createElement(Path, {"d":"M15 16L9 16L9 12L15 12Z","key":"1"}),
    createElement(Path, {"d":"M14 12L10 12L10 10C10 8.895 10.895 8 12 8C13.105 8 14 8.895 14 10Z","key":"2"})
  );
});

ChatLockSharp.displayName = 'ChatLockSharp';

export default ChatLockSharp;
export { ChatLockSharp };
