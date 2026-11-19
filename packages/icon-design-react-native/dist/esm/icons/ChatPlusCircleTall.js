import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatPlusCircleTall = forwardRef(function ChatPlusCircleTall(
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
    createElement(Path, {"d":"M11 2.066C10.672 2.027 10.34 2 10 2C5.582 2 2 5.582 2 10C2 14.418 5.582 18 10 18L10 22C13.469 20.613 15.805 17.988 17.016 15","key":"0"}),
    createElement(Path, {"d":"M22 7C22 9.762 19.762 12 17 12C14.238 12 12 9.762 12 7C12 4.238 14.238 2 17 2C19.762 2 22 4.238 22 7Z","key":"1"}),
    createElement(Path, {"d":"M17 5L17 9","key":"2"}),
    createElement(Path, {"d":"M19 7L15 7","key":"3"})
  );
});

ChatPlusCircleTall.displayName = 'ChatPlusCircleTall';

export default ChatPlusCircleTall;
export { ChatPlusCircleTall };
