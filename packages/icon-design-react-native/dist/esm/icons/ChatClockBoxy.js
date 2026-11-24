import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatClockBoxy = forwardRef(function ChatClockBoxy(
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
    createElement(Path, {"d":"M10 2L5 2C3.344 2 2 3.344 2 5L2 22L7 18L19 18C20.656 18 22 16.656 22 15L22 14","key":"0"}),
    createElement(Path, {"d":"M22 7C22 9.762 19.762 12 17 12C14.238 12 12 9.762 12 7C12 4.238 14.238 2 17 2C19.762 2 22 4.238 22 7Z","key":"1"}),
    createElement(Path, {"d":"M19 7L17 7L17 5","key":"2"})
  );
});

ChatClockBoxy.displayName = 'ChatClockBoxy';

export default ChatClockBoxy;
export { ChatClockBoxy };
