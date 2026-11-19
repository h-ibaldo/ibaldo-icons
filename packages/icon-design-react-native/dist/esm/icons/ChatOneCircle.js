import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatOneCircle = forwardRef(function ChatOneCircle(
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
    createElement(Path, {"d":"M22 7.5C22 10.539 19.535 13 16.5 13C13.465 13 11 10.539 11 7.5C11 4.461 13.465 2 16.5 2C19.535 2 22 4.461 22 7.5Z","key":"0"}),
    createElement(Path, {"d":"M17 9L17 6L16 6","key":"1"}),
    createElement(Path, {"d":"M13.246 3.074C12.836 3.031 12.426 3 12 3C6.477 3 2 6.582 2 11C2 13.84 3.855 16.328 6.645 17.75C6.664 18.895 6.391 20.078 5.719 21.113C5.48 21.48 5.766 21.973 6.195 21.898C8.313 21.535 9.781 20.23 10.715 18.926C11.137 18.969 11.563 19 12 19C17.523 19 22 15.418 22 11C22 10.387 21.891 9.793 21.723 9.219","key":"2"})
  );
});

ChatOneCircle.displayName = 'ChatOneCircle';

export default ChatOneCircle;
export { ChatOneCircle };
