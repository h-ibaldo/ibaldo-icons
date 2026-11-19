import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatTextOffSharp = forwardRef(function ChatTextOffSharp(
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
    createElement(Path, {"d":"M21.449 15.25C21.801 14.23 22 13.141 22 12C22 6.477 17.523 2 12 2C11.051 2 10.133 2.141 9.262 2.387","key":"0"}),
    createElement(Path, {"d":"M3 2L21 21","key":"1"}),
    createElement(Path, {"d":"M5.383 4.516C3.313 6.348 2 9.02 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C14.789 22 17.309 20.855 19.121 19.016","key":"2"}),
    createElement(Path, {"d":"M15 10L16 10","key":"3"}),
    createElement(Path, {"d":"M8 10L10.578 10","key":"4"}),
    createElement(Path, {"d":"M8 14L14.367 14","key":"5"})
  );
});

ChatTextOffSharp.displayName = 'ChatTextOffSharp';

export default ChatTextOffSharp;
export { ChatTextOffSharp };
