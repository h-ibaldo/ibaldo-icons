import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatStackSearchCornerLayered = forwardRef(function ChatStackSearchCornerLayered(
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
    createElement(Path, {"d":"M18 10L18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9L2 22L7 18L10 18","key":"0"}),
    createElement(Path, {"d":"M5 6L5 5C5 3.344 6.344 2 8 2L19 2C20.656 2 22 3.344 22 5L22 12","key":"1"}),
    createElement(Path, {"d":"M21 17.5C21 19.434 19.434 21 17.5 21C15.566 21 14 19.434 14 17.5C14 15.566 15.566 14 17.5 14C19.434 14 21 15.566 21 17.5Z","key":"2"}),
    createElement(Path, {"d":"M19.973 19.973L22 22","key":"3"})
  );
});

ChatStackSearchCornerLayered.displayName = 'ChatStackSearchCornerLayered';

export default ChatStackSearchCornerLayered;
export { ChatStackSearchCornerLayered };
