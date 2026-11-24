import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatWarningBroken = forwardRef(function ChatWarningBroken(
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
    createElement(Path, {"d":"M9 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18","key":"0"}),
    createElement(Path, {"d":"M13.77 3.004L9.902 9.699C9.059 11.168 10.117 13 11.809 13L19.191 13C20.883 13 21.941 11.168 21.098 9.699L17.234 3.004C16.461 1.668 14.539 1.668 13.77 3.004Z","key":"1"}),
    createElement(Path, {"d":"M15.5 7L15.5 6","key":"2"}),
    createElement(Path, {"d":"M15.5 10L15.5 10","key":"3"}),
    createElement(Path, {"d":"M12 22L15 18L19 18C20.305 18 21.402 17.164 21.816 16","key":"4"})
  );
});

ChatWarningBroken.displayName = 'ChatWarningBroken';

export default ChatWarningBroken;
export { ChatWarningBroken };
