import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatBanRound = forwardRef(function ChatBanRound(
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
    createElement(Path, {"d":"M12 2C6.477 2 2 6.477 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z","key":"0"}),
    createElement(Path, {"d":"M17 12C17 14.762 14.762 17 12 17C9.238 17 7 14.762 7 12C7 9.238 9.238 7 12 7C14.762 7 17 9.238 17 12Z","key":"1"}),
    createElement(Path, {"d":"M15.535 8.465L8.465 15.535","key":"2"})
  );
});

ChatBanRound.displayName = 'ChatBanRound';

export default ChatBanRound;
export { ChatBanRound };
