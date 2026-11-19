import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatStackSearchCornerFlipped = forwardRef(function ChatStackSearchCornerFlipped(
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
    createElement(Path, {"d":"M10 6L5 2L5 6L4 6C2.895 6 2 6.895 2 8L2 12C2 13.105 2.895 14 4 14L15.758 14C16.555 14 17.316 13.684 17.879 13.121L18 13","key":"0"}),
    createElement(Path, {"d":"M22 14L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L7 18","key":"1"}),
    createElement(Path, {"d":"M21 5.5C21 7.434 19.434 9 17.5 9C15.566 9 14 7.434 14 5.5C14 3.566 15.566 2 17.5 2C19.434 2 21 3.566 21 5.5Z","key":"2"}),
    createElement(Path, {"d":"M19.973 7.973L22 10","key":"3"})
  );
});

ChatStackSearchCornerFlipped.displayName = 'ChatStackSearchCornerFlipped';

export default ChatStackSearchCornerFlipped;
export { ChatStackSearchCornerFlipped };
