import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatStackDotsVerticalNotch = forwardRef(function ChatStackDotsVerticalNotch(
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
    createElement(Path, {"d":"M22 15L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L12 18","key":"3"}),
    createElement(Path, {"d":"M2 4L2 12C2 13.105 2.895 14 4 14L5 14L5 18L10 14L15 14C16.105 14 17 13.105 17 12L17 4C17 2.895 16.105 2 15 2L4 2C2.895 2 2 2.895 2 4Z","key":"4"})
  );
});

ChatStackDotsVerticalNotch.displayName = 'ChatStackDotsVerticalNotch';

export default ChatStackDotsVerticalNotch;
export { ChatStackDotsVerticalNotch };
