import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatTextOffTooltip = forwardRef(function ChatTextOffTooltip(
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
    createElement(Path, {"d":"M22 16L22 7C22 5.344 20.656 4 19 4L11 4","key":"1"}),
    createElement(Path, {"d":"M4.902 4.012C3.293 4.063 2 5.375 2 7L2 15C2 16.656 3.344 18 5 18L8 18L12 22L16 18L18.156 18","key":"2"}),
    createElement(Path, {"d":"M15 9L17 9","key":"3"}),
    createElement(Path, {"d":"M7 9L9.633 9","key":"4"}),
    createElement(Path, {"d":"M7 13L13 13","key":"5"})
  );
});

ChatTextOffTooltip.displayName = 'ChatTextOffTooltip';

export default ChatTextOffTooltip;
export { ChatTextOffTooltip };
