import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatTriangleRound = forwardRef(function ChatTriangleRound(
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
    createElement(Path, {"d":"M13.648 11L20.352 11C21.516 11 22.238 9.727 21.637 8.727L18.285 3.145C17.703 2.172 16.297 2.172 15.715 3.145L12.363 8.727C11.762 9.727 12.484 11 13.648 11Z","key":"0"}),
    createElement(Path, {"d":"M12 2C6.477 2 2 6.477 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C16.477 22 20.266 19.059 21.539 15","key":"1"})
  );
});

ChatTriangleRound.displayName = 'ChatTriangleRound';

export default ChatTriangleRound;
export { ChatTriangleRound };
