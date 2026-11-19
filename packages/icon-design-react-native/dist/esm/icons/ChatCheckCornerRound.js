import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatCheckCornerRound = forwardRef(function ChatCheckCornerRound(
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
    createElement(Path, {"d":"M16 4L17.5 6L22 2","key":"0"}),
    createElement(Path, {"d":"M12 2C6.477 2 2 6.477 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C17.523 22 22 17.523 22 12C22 10.953 21.84 9.945 21.539 9","key":"1"})
  );
});

ChatCheckCornerRound.displayName = 'ChatCheckCornerRound';

export default ChatCheckCornerRound;
export { ChatCheckCornerRound };
