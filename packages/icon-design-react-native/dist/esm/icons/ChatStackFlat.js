import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatStackFlat = forwardRef(function ChatStackFlat(
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
    createElement(Path, {"d":"M22 22L6 22C4.895 22 4 21.105 4 20L4 16C4 14.895 4.895 14 6 14L18 14C19.105 14 20 14.895 20 16L20 19Z","key":"0"}),
    createElement(Path, {"d":"M2 10L18 10C19.105 10 20 9.105 20 8L20 4C20 2.895 19.105 2 18 2L6 2C4.895 2 4 2.895 4 4L4 7Z","key":"1"})
  );
});

ChatStackFlat.displayName = 'ChatStackFlat';

export default ChatStackFlat;
export { ChatStackFlat };
