import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatCheckDoubleCornerSharp = forwardRef(function ChatCheckDoubleCornerSharp(
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
    createElement(Path, {"d":"M12 4L13.5 6L18 2","key":"0"}),
    createElement(Path, {"d":"M16.801 7.066L17.5 8L22 4","key":"1"}),
    createElement(Path, {"d":"M8 2.84C4.469 4.383 2 7.898 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C17.523 22 22 17.523 22 12C22 11.664 21.98 11.328 21.949 11","key":"2"})
  );
});

ChatCheckDoubleCornerSharp.displayName = 'ChatCheckDoubleCornerSharp';

export default ChatCheckDoubleCornerSharp;
export { ChatCheckDoubleCornerSharp };
