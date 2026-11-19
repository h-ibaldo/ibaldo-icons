import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatTextOffBoxy = forwardRef(function ChatTextOffBoxy(
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
    createElement(Path, {"d":"M3 2L21 21","key":"0"}),
    createElement(Path, {"d":"M22 16L22 8C22 6.344 20.656 5 19 5L11.738 5","key":"1"}),
    createElement(Path, {"d":"M5.844 5L5 5C3.344 5 2 6.344 2 8L2 22L7 18L18.16 18","key":"2"}),
    createElement(Path, {"d":"M7 10L10.5 10","key":"3"}),
    createElement(Path, {"d":"M15 10L17 10","key":"4"}),
    createElement(Path, {"d":"M7 14L14 14","key":"5"})
  );
});

ChatTextOffBoxy.displayName = 'ChatTextOffBoxy';

export default ChatTextOffBoxy;
export { ChatTextOffBoxy };
