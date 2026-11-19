import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatListBoxy = forwardRef(function ChatListBoxy(
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
    createElement(Path, {"d":"M2 5L2 22L7 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z","key":"0"}),
    createElement(Path, {"d":"M8 8L8 8","key":"1"}),
    createElement(Path, {"d":"M8 12L8 12","key":"2"}),
    createElement(Path, {"d":"M12 8L16 8","key":"3"}),
    createElement(Path, {"d":"M12 12L16 12","key":"4"})
  );
});

ChatListBoxy.displayName = 'ChatListBoxy';

export default ChatListBoxy;
export { ChatListBoxy };
