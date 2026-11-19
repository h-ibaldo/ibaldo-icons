import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatStackOffBoxy = forwardRef(function ChatStackOffBoxy(
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
    createElement(Path, {"d":"M22 13L22 5C22 3.344 20.656 2 19 2L8 2","key":"0"}),
    createElement(Path, {"d":"M2 2L20 21","key":"1"}),
    createElement(Path, {"d":"M16.672 17.488C17.473 16.949 18 16.039 18 15L18 9C18 7.344 16.656 6 15 6L5.789 6","key":"2"}),
    createElement(Path, {"d":"M2.086 8.313C2.035 8.535 2 8.762 2 9L2 22L7 18L11.266 18","key":"3"})
  );
});

ChatStackOffBoxy.displayName = 'ChatStackOffBoxy';

export default ChatStackOffBoxy;
export { ChatStackOffBoxy };
