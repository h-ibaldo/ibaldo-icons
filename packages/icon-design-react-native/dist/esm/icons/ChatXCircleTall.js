import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatXCircleTall = forwardRef(function ChatXCircleTall(
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
    createElement(Path, {"d":"M22 7.5C22 10.535 19.535 13 16.5 13C13.465 13 11 10.535 11 7.5C11 4.465 13.465 2 16.5 2C19.535 2 22 4.465 22 7.5Z","key":"0"}),
    createElement(Path, {"d":"M18 6L15 9","key":"1"}),
    createElement(Path, {"d":"M15 6L18 9","key":"2"}),
    createElement(Path, {"d":"M10 2C5.582 2 2 5.582 2 10C2 14.418 5.582 18 10 18L10 22C13.07 20.77 15.234 18.563 16.539 16","key":"3"})
  );
});

ChatXCircleTall.displayName = 'ChatXCircleTall';

export default ChatXCircleTall;
export { ChatXCircleTall };
