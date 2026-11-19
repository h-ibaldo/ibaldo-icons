import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatCheckCircleRound = forwardRef(function ChatCheckCircleRound(
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
    createElement(Path, {"d":"M22 7C22 9.762 19.762 12 17 12C14.238 12 12 9.762 12 7C12 4.238 14.238 2 17 2C19.762 2 22 4.238 22 7Z","key":"0"}),
    createElement(Path, {"d":"M15 7L16.5 8.5L19 6","key":"1"}),
    createElement(Path, {"d":"M10 2.199C5.438 3.129 2 7.16 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C16.84 22 20.871 18.566 21.801 14","key":"2"})
  );
});

ChatCheckCircleRound.displayName = 'ChatCheckCircleRound';

export default ChatCheckCircleRound;
export { ChatCheckCircleRound };
