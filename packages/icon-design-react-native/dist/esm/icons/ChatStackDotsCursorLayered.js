import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatStackDotsCursorLayered = forwardRef(function ChatStackDotsCursorLayered(
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
    createElement(Path, {"d":"M2 9L2 22L7 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9Z","key":"0"}),
    createElement(Path, {"d":"M5 6L5 5C5 3.344 6.344 2 8 2L19 2C20.656 2 22 3.344 22 5L22 11C22 12.656 20.656 14 19 14L18 14","key":"1"}),
    createElement(Path, {"d":"M6 12L6 12","key":"2"}),
    createElement(Path, {"d":"M10 12L10 12","key":"3"}),
    createElement(Path, {"d":"M14 10.5L14 13.5","key":"4"})
  );
});

ChatStackDotsCursorLayered.displayName = 'ChatStackDotsCursorLayered';

export default ChatStackDotsCursorLayered;
export { ChatStackDotsCursorLayered };
