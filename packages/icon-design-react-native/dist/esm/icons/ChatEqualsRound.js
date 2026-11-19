import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatEqualsRound = forwardRef(function ChatEqualsRound(
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
    createElement(Path, {"d":"M8 10L16 10","key":"0"}),
    createElement(Path, {"d":"M8 14L16 14","key":"1"}),
    createElement(Path, {"d":"M12 2C6.477 2 2 6.477 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z","key":"2"})
  );
});

ChatEqualsRound.displayName = 'ChatEqualsRound';

export default ChatEqualsRound;
export { ChatEqualsRound };
