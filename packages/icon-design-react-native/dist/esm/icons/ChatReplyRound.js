import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatReplyRound = forwardRef(function ChatReplyRound(
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
    createElement(Path, {"d":"M10.023 13.02L8.023 11.02L10.023 9.02","key":"1"}),
    createElement(Path, {"d":"M8.023 11.02L12.023 11.02C13.68 11.02 15.023 12.363 15.023 14.02L15.023 15.02","key":"2"})
  );
});

ChatReplyRound.displayName = 'ChatReplyRound';

export default ChatReplyRound;
export { ChatReplyRound };
