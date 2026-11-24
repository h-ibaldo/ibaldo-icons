import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatHeart = forwardRef(function ChatHeart(
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
    createElement(Path, {"d":"M11.172 14.414L8.375 11.621C7.551 10.793 7.551 9.449 8.375 8.621L8.379 8.621C9.207 7.793 10.551 7.793 11.375 8.621L11.879 9.121L12.379 8.621C13.207 7.793 14.551 7.793 15.375 8.621L15.379 8.621C16.207 9.449 16.207 10.793 15.379 11.621L12.586 14.414C12.195 14.805 11.563 14.805 11.172 14.414Z","key":"0"}),
    createElement(Path, {"d":"M12 3C6.477 3 2 6.582 2 11C2 13.84 3.855 16.328 6.645 17.75C6.664 18.895 6.391 20.078 5.719 21.113C5.48 21.48 5.766 21.973 6.195 21.898C8.313 21.535 9.781 20.23 10.715 18.926C11.137 18.969 11.563 19 12 19C17.523 19 22 15.418 22 11C22 6.582 17.523 3 12 3Z","key":"1"})
  );
});

ChatHeart.displayName = 'ChatHeart';

export default ChatHeart;
export { ChatHeart };
