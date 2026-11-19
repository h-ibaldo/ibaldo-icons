import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatDotRound = forwardRef(function ChatDotRound(
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
    createElement(Path, {"d":"M16 5C16 6.656 17.344 8 19 8C20.656 8 22 6.656 22 5C22 3.344 20.656 2 19 2C17.344 2 16 3.344 16 5Z","key":"0"}),
    createElement(Path, {"d":"M13 2.051C12.672 2.016 12.34 2 12 2C6.477 2 2 6.477 2 12C2 14.625 3.02 17.008 4.676 18.793L2 22L12 22C17.523 22 22 17.523 22 12C22 11.664 21.98 11.328 21.949 11","key":"1"})
  );
});

ChatDotRound.displayName = 'ChatDotRound';

export default ChatDotRound;
export { ChatDotRound };
