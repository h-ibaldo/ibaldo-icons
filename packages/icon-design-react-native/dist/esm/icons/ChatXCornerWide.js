import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatXCornerWide = forwardRef(function ChatXCornerWide(
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
    createElement(Path, {"d":"M18 6L22 2","key":"0"}),
    createElement(Path, {"d":"M22 6L18 2","key":"1"}),
    createElement(Path, {"d":"M14 3L9 3C5.133 3 2 6.133 2 10C2 13.172 4.109 15.848 7 16.707L7 21L11.57 17L15 17C18.867 17 22 13.867 22 10","key":"2"})
  );
});

ChatXCornerWide.displayName = 'ChatXCornerWide';

export default ChatXCornerWide;
export { ChatXCornerWide };
