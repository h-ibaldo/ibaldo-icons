import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatXCornerSharp = forwardRef(function ChatXCornerSharp(
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
    createElement(Path, {"d":"M18 6L22 2","key":"0"}),
    createElement(Path, {"d":"M22 6L18 2","key":"1"}),
    createElement(Path, {"d":"M13 2.051C12.672 2.016 12.336 2 12 2C6.477 2 2 6.477 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C17.523 22 22 17.523 22 12C22 11.316 21.93 10.645 21.801 10","key":"2"})
  );
});

ChatXCornerSharp.displayName = 'ChatXCornerSharp';

export default ChatXCornerSharp;
export { ChatXCornerSharp };
