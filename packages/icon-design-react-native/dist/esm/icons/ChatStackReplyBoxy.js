import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatStackReplyBoxy = forwardRef(function ChatStackReplyBoxy(
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
    createElement(Path, {"d":"M2 9L2 22L7 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9Z","key":"0"}),
    createElement(Path, {"d":"M22 13L22 5C22 3.344 20.656 2 19 2L7 2","key":"1"}),
    createElement(Path, {"d":"M9 14L7 12L9 10","key":"2"}),
    createElement(Path, {"d":"M7 12L11 12C12.105 12 13 12.895 13 14","key":"3"})
  );
});

ChatStackReplyBoxy.displayName = 'ChatStackReplyBoxy';

export default ChatStackReplyBoxy;
export { ChatStackReplyBoxy };
