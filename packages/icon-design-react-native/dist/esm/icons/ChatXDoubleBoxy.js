import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatXDoubleBoxy = forwardRef(function ChatXDoubleBoxy(
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
    createElement(Path, {"d":"M2 5L2 22L7 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z","key":"0"}),
    createElement(Path, {"d":"M14 12L18 8","key":"1"}),
    createElement(Path, {"d":"M18 12L14 8","key":"2"}),
    createElement(Path, {"d":"M6 12L10 8","key":"3"}),
    createElement(Path, {"d":"M10 12L6 8","key":"4"})
  );
});

ChatXDoubleBoxy.displayName = 'ChatXDoubleBoxy';

export default ChatXDoubleBoxy;
export { ChatXDoubleBoxy };
