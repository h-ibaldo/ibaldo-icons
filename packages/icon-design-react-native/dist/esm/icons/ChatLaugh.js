import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatLaugh = forwardRef(function ChatLaugh(
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
    createElement(Path, {"d":"M12 3C6.477 3 2 6.582 2 11C2 13.84 3.855 16.328 6.645 17.75C6.664 18.895 6.391 20.078 5.719 21.113C5.48 21.48 5.766 21.973 6.195 21.898C8.313 21.535 9.781 20.23 10.715 18.926C11.137 18.969 11.563 19 12 19C17.523 19 22 15.418 22 11C22 6.582 17.523 3 12 3Z","key":"0"}),
    createElement(Path, {"d":"M9 12L15 12C15 13.656 13.656 15 12 15C10.344 15 9 13.656 9 12Z","key":"1"}),
    createElement(Path, {"d":"M14.5 9C14.223 9 14 8.777 14 8.5C14 8.223 14.223 8 14.5 8C14.777 8 15 8.223 15 8.5C15 8.777 14.777 9 14.5 9Z","key":"2"}),
    createElement(Path, {"d":"M9.5 9C9.223 9 9 8.777 9 8.5C9 8.223 9.223 8 9.5 8C9.777 8 10 8.223 10 8.5C10 8.777 9.777 9 9.5 9Z","key":"3"})
  );
});

ChatLaugh.displayName = 'ChatLaugh';

export default ChatLaugh;
export { ChatLaugh };
