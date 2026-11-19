import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatEditSharp = forwardRef(function ChatEditSharp(
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
    createElement(Path, {"d":"M21.414 3.414L21.586 3.586C22.367 4.367 22.367 5.633 21.586 6.414L15 13L12 13L12 10L18.586 3.414C19.367 2.633 20.633 2.633 21.414 3.414Z","key":"0"}),
    createElement(Path, {"d":"M17 5L20 8","key":"1"}),
    createElement(Path, {"d":"M13 2.051C12.672 2.02 12.34 2 12 2C6.477 2 2 6.477 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C17.523 22 22 17.523 22 12","key":"2"})
  );
});

ChatEditSharp.displayName = 'ChatEditSharp';

export default ChatEditSharp;
export { ChatEditSharp };
