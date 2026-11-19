import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatWarningWide = forwardRef(function ChatWarningWide(
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
    createElement(Path, {"d":"M13.77 3.004L9.902 9.699C9.059 11.168 10.117 13 11.809 13L19.191 13C20.883 13 21.941 11.168 21.098 9.699L17.234 3.004C16.461 1.668 14.539 1.668 13.77 3.004Z","key":"0"}),
    createElement(Path, {"d":"M15.5 7L15.5 6","key":"1"}),
    createElement(Path, {"d":"M15.5 10L15.5 10","key":"2"}),
    createElement(Path, {"d":"M9 4C5.133 4 2 7.133 2 11C2 14.172 4.109 16.848 7 17.707L7 22L11.57 18L15 18C16.488 18 17.867 17.531 19 16.738","key":"3"})
  );
});

ChatWarningWide.displayName = 'ChatWarningWide';

export default ChatWarningWide;
export { ChatWarningWide };
