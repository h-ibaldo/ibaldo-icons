import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatStackHeartBoxy = forwardRef(function ChatStackHeartBoxy(
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
    createElement(Path, {"d":"M9.422 14.492L7.148 12.219C6.473 11.543 6.473 10.449 7.148 9.773C7.824 9.098 8.918 9.098 9.594 9.773L10 10.184L10.406 9.773C11.082 9.098 12.176 9.098 12.852 9.773C13.527 10.449 13.527 11.543 12.852 12.219L10.574 14.492C10.258 14.813 9.742 14.813 9.422 14.492Z","key":"2"})
  );
});

ChatStackHeartBoxy.displayName = 'ChatStackHeartBoxy';

export default ChatStackHeartBoxy;
export { ChatStackHeartBoxy };
