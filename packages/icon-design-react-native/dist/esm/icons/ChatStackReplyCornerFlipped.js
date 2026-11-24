import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatStackReplyCornerFlipped = forwardRef(function ChatStackReplyCornerFlipped(
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
    createElement(Path, {"d":"M16 14L4 14C2.895 14 2 13.105 2 12L2 8C2 6.895 2.895 6 4 6L5 6L5 2L10 6L12 6","key":"0"}),
    createElement(Path, {"d":"M22 14L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L7 18","key":"1"}),
    createElement(Path, {"d":"M18 10L16 8L18 6","key":"2"}),
    createElement(Path, {"d":"M16 8L20 8C21.105 8 22 8.895 22 10","key":"3"})
  );
});

ChatStackReplyCornerFlipped.displayName = 'ChatStackReplyCornerFlipped';

export default ChatStackReplyCornerFlipped;
export { ChatStackReplyCornerFlipped };
