import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatDotsUnderscore = forwardRef(function ChatDotsUnderscore(
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
    createElement(Path, {"d":"M8 11L8 11","key":"1"}),
    createElement(Path, {"d":"M12 11L12 11","key":"2"}),
    createElement(Path, {"d":"M17 13L15 13","key":"3"})
  );
});

ChatDotsUnderscore.displayName = 'ChatDotsUnderscore';

export default ChatDotsUnderscore;
export { ChatDotsUnderscore };
