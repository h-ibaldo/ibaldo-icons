import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatDotsVerticalWide = forwardRef(function ChatDotsVerticalWide(
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
    createElement(Path, {"d":"M22 2L22 2","key":"0"}),
    createElement(Path, {"d":"M22 6L22 6","key":"1"}),
    createElement(Path, {"d":"M22 10L22 10","key":"2"}),
    createElement(Path, {"d":"M17 3.293C16.367 3.105 15.695 3 15 3L9 3C5.133 3 2 6.133 2 10C2 13.172 4.109 15.848 7 16.707L7 21L11.57 17L15 17C17.379 17 19.477 15.813 20.738 14","key":"3"})
  );
});

ChatDotsVerticalWide.displayName = 'ChatDotsVerticalWide';

export default ChatDotsVerticalWide;
export { ChatDotsVerticalWide };
