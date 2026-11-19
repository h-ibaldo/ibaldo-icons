import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatStackMinusCircleFlipped = forwardRef(function ChatStackMinusCircleFlipped(
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
    createElement(Path, {"d":"M22 8C22 10.762 19.762 13 17 13C14.238 13 12 10.762 12 8C12 5.238 14.238 3 17 3C19.762 3 22 5.238 22 8Z","key":"0"}),
    createElement(Path, {"d":"M19 8L15 8","key":"1"}),
    createElement(Path, {"d":"M22 15L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L7 18","key":"2"}),
    createElement(Path, {"d":"M8.75 5L5 2L5 6L4 6C2.895 6 2 6.895 2 8L2 12C2 13.105 2.895 14 4 14L11 14","key":"3"})
  );
});

ChatStackMinusCircleFlipped.displayName = 'ChatStackMinusCircleFlipped';

export default ChatStackMinusCircleFlipped;
export { ChatStackMinusCircleFlipped };
