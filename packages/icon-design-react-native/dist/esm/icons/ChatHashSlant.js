import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatHashSlant = forwardRef(function ChatHashSlant(
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
    createElement(Path, {"d":"M2 5L2 15C2 16.656 3.344 18 5 18L8 18L8 22L14 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z","key":"0"}),
    createElement(Path, {"d":"M11 6L9 14","key":"1"}),
    createElement(Path, {"d":"M15 6L13 14","key":"2"}),
    createElement(Path, {"d":"M8 8L17 8","key":"3"}),
    createElement(Path, {"d":"M7 12L16 12","key":"4"})
  );
});

ChatHashSlant.displayName = 'ChatHashSlant';

export default ChatHashSlant;
export { ChatHashSlant };
