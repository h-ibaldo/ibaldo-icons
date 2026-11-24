import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatHeartBoxy = forwardRef(function ChatHeartBoxy(
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
    createElement(Path, {"d":"M2 5L2 22L7 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z","key":"0"}),
    createElement(Path, {"d":"M11.172 13.414L8.375 10.621C7.551 9.793 7.551 8.449 8.375 7.621L8.379 7.621C9.207 6.793 10.551 6.793 11.375 7.621L11.879 8.121L12.379 7.621C13.207 6.793 14.551 6.793 15.375 7.621L15.379 7.621C16.207 8.449 16.207 9.793 15.379 10.621L12.586 13.414C12.195 13.805 11.563 13.805 11.172 13.414Z","key":"1"})
  );
});

ChatHeartBoxy.displayName = 'ChatHeartBoxy';

export default ChatHeartBoxy;
export { ChatHeartBoxy };
