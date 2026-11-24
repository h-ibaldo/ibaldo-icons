import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatOffRound = forwardRef(function ChatOffRound(
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
    createElement(Path, {"d":"M3 2L21 21","key":"0"}),
    createElement(Path, {"d":"M5.383 4.516C3.313 6.348 2 9.02 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C14.789 22 17.309 20.855 19.121 19.016","key":"1"}),
    createElement(Path, {"d":"M21.434 15.293C21.793 14.258 22 13.156 22 12C22 6.477 17.523 2 12 2C11.035 2 10.105 2.145 9.223 2.398","key":"2"})
  );
});

ChatOffRound.displayName = 'ChatOffRound';

export default ChatOffRound;
export { ChatOffRound };
