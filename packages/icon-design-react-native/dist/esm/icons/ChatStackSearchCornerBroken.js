import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatStackSearchCornerBroken = forwardRef(function ChatStackSearchCornerBroken(
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
    createElement(Path, {"d":"M21 5.5C21 7.434 19.434 9 17.5 9C15.566 9 14 7.434 14 5.5C14 3.566 15.566 2 17.5 2C19.434 2 21 3.566 21 5.5Z","key":"0"}),
    createElement(Path, {"d":"M19.973 7.973L22 10","key":"1"}),
    createElement(Path, {"d":"M11 2L5 2C3.344 2 2 3.344 2 5L2 13","key":"2"}),
    createElement(Path, {"d":"M10 6L9 6C7.344 6 6 7.344 6 9L6 15C6 16.656 7.344 18 9 18L11 18","key":"3"}),
    createElement(Path, {"d":"M14 22L17 18L19 18C20.656 18 22 16.656 22 15L22 14","key":"4"})
  );
});

ChatStackSearchCornerBroken.displayName = 'ChatStackSearchCornerBroken';

export default ChatStackSearchCornerBroken;
export { ChatStackSearchCornerBroken };
