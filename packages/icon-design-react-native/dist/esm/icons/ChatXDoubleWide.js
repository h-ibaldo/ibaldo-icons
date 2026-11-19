import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatXDoubleWide = forwardRef(function ChatXDoubleWide(
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
    createElement(Path, {"d":"M15 3L9 3C5.133 3 2 6.133 2 10C2 13.172 4.109 15.848 7 16.707L7 21L11.57 17L15 17C18.867 17 22 13.867 22 10C22 6.133 18.867 3 15 3Z","key":"0"}),
    createElement(Path, {"d":"M14 12L18 8","key":"1"}),
    createElement(Path, {"d":"M18 12L14 8","key":"2"}),
    createElement(Path, {"d":"M6 12L10 8","key":"3"}),
    createElement(Path, {"d":"M10 12L6 8","key":"4"})
  );
});

ChatXDoubleWide.displayName = 'ChatXDoubleWide';

export default ChatXDoubleWide;
export { ChatXDoubleWide };
