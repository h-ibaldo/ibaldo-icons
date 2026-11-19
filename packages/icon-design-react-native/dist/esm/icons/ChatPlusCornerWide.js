import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatPlusCornerWide = forwardRef(function ChatPlusCornerWide(
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
    createElement(Path, {"d":"M19 2L19 8","key":"0"}),
    createElement(Path, {"d":"M22 5L16 5","key":"1"}),
    createElement(Path, {"d":"M12 3L9 3C5.133 3 2 6.133 2 10C2 13.172 4.109 15.848 7 16.707L7 21L11.57 17L15 17C18.523 17 21.434 14.391 21.922 11","key":"2"})
  );
});

ChatPlusCornerWide.displayName = 'ChatPlusCornerWide';

export default ChatPlusCornerWide;
export { ChatPlusCornerWide };
