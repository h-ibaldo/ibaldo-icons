import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatForwardCornerRound = forwardRef(function ChatForwardCornerRound(
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
    createElement(Path, {"d":"M15 5L22 5","key":"0"}),
    createElement(Path, {"d":"M20 3L22 5L20 7","key":"1"}),
    createElement(Path, {"d":"M12 2C6.477 2 2 6.477 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C17.523 22 22 17.523 22 12C22 11.664 21.98 11.328 21.949 11","key":"2"})
  );
});

ChatForwardCornerRound.displayName = 'ChatForwardCornerRound';

export default ChatForwardCornerRound;
export { ChatForwardCornerRound };
