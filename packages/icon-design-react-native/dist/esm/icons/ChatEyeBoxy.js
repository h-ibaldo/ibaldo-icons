import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatEyeBoxy = forwardRef(function ChatEyeBoxy(
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
    createElement(Path, {"d":"M15.531 7.5C14.98 7.5 14.531 7.051 14.531 6.5C14.531 5.949 14.98 5.5 15.531 5.5C16.086 5.5 16.531 5.949 16.531 6.5C16.531 7.051 16.086 7.5 15.531 7.5Z","key":"0"}),
    createElement(Path, {"d":"M15.531 2C12.547 2 10.008 3.871 9 6.5C10.008 9.129 12.547 11 15.531 11C18.516 11 21.059 9.129 22.063 6.5C21.059 3.871 18.516 2 15.531 2Z","key":"1"}),
    createElement(Path, {"d":"M8 2L5 2C3.344 2 2 3.344 2 5L2 22L7 18L19 18C20.656 18 22 16.656 22 15L22 12","key":"2"})
  );
});

ChatEyeBoxy.displayName = 'ChatEyeBoxy';

export default ChatEyeBoxy;
export { ChatEyeBoxy };
