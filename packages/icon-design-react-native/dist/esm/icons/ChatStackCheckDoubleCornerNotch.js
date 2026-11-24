import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatStackCheckDoubleCornerNotch = forwardRef(function ChatStackCheckDoubleCornerNotch(
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
    createElement(Path, {"d":"M22 8L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L12 18","key":"0"}),
    createElement(Path, {"d":"M2 4L3.5 6L8 2","key":"1"}),
    createElement(Path, {"d":"M6.801 7.066L7.5 8L12 4","key":"2"}),
    createElement(Path, {"d":"M2 10L2 12C2 13.105 2.895 14 4 14L5 14L5 18L10 14L16 14C17.105 14 18 13.105 18 12L18 4C18 2.895 17.105 2 16 2L15 2","key":"3"})
  );
});

ChatStackCheckDoubleCornerNotch.displayName = 'ChatStackCheckDoubleCornerNotch';

export default ChatStackCheckDoubleCornerNotch;
export { ChatStackCheckDoubleCornerNotch };
