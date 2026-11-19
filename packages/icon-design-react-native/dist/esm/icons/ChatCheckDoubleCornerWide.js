import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatCheckDoubleCornerWide = forwardRef(function ChatCheckDoubleCornerWide(
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
    createElement(Path, {"d":"M12 4L13.5 6L18 2","key":"0"}),
    createElement(Path, {"d":"M16.801 7.066L17.5 8L22 4","key":"1"}),
    createElement(Path, {"d":"M8 3.078C4.609 3.566 2 6.477 2 10C2 13.172 4.109 15.848 7 16.707L7 21L11.57 17L15 17C18.867 17 22 13.867 22 10","key":"2"})
  );
});

ChatCheckDoubleCornerWide.displayName = 'ChatCheckDoubleCornerWide';

export default ChatCheckDoubleCornerWide;
export { ChatCheckDoubleCornerWide };
