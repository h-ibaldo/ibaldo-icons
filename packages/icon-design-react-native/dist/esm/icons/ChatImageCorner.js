import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatImageCorner = forwardRef(function ChatImageCorner(
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
    createElement(Path, {"d":"M15 12L9 12C7.895 12 7 11.105 7 10L7 4C7 2.895 7.895 2 9 2L15 2C16.105 2 17 2.895 17 4L17 10C17 11.105 16.105 12 15 12Z","key":"0"}),
    createElement(Path, {"d":"M7 4.078C4.016 5.465 2 8.039 2 11C2 13.84 3.855 16.328 6.645 17.75C6.664 18.895 6.391 20.078 5.719 21.113C5.48 21.48 5.766 21.973 6.195 21.898C8.313 21.535 9.781 20.23 10.715 18.926C11.137 18.969 11.563 19 12 19C17.523 19 22 15.418 22 11C22 8.039 19.984 5.465 17 4.078","key":"1"}),
    createElement(Path, {"d":"M17 6C13.688 6 11 8.688 11 12","key":"2"}),
    createElement(Path, {"d":"M10 5L10 5","key":"3"})
  );
});

ChatImageCorner.displayName = 'ChatImageCorner';

export default ChatImageCorner;
export { ChatImageCorner };
