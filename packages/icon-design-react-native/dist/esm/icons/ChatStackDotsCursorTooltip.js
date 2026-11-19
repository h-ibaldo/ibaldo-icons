import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatStackDotsCursorTooltip = forwardRef(function ChatStackDotsCursorTooltip(
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
    createElement(Path, {"d":"M2 9L2 15C2 16.656 3.344 18 5 18L7 18L10 22L13 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9Z","key":"0"}),
    createElement(Path, {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L7 2","key":"1"}),
    createElement(Path, {"d":"M6 12L6 12","key":"2"}),
    createElement(Path, {"d":"M10 12L10 12","key":"3"}),
    createElement(Path, {"d":"M14 10.5L14 13.5","key":"4"})
  );
});

ChatStackDotsCursorTooltip.displayName = 'ChatStackDotsCursorTooltip';

export default ChatStackDotsCursorTooltip;
export { ChatStackDotsCursorTooltip };
