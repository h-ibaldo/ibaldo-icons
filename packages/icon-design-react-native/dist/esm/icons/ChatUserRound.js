import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatUserRound = forwardRef(function ChatUserRound(
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
    createElement(Path, {"d":"M14.5 10.5C14.5 11.883 13.383 13 12 13C10.617 13 9.5 11.883 9.5 10.5C9.5 9.117 10.617 8 12 8C13.383 8 14.5 9.117 14.5 10.5Z","key":"0"}),
    createElement(Path, {"d":"M16 16C16 14.344 14.656 13 13 13L11 13C9.344 13 8 14.344 8 16","key":"1"}),
    createElement(Path, {"d":"M12 2C6.477 2 2 6.477 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z","key":"2"})
  );
});

ChatUserRound.displayName = 'ChatUserRound';

export default ChatUserRound;
export { ChatUserRound };
