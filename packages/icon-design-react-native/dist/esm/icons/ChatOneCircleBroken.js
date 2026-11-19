import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatOneCircleBroken = forwardRef(function ChatOneCircleBroken(
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
    createElement(Path, {"d":"M9 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18","key":"0"}),
    createElement(Path, {"d":"M22 15C22 16.656 20.656 18 19 18L15 18L12 22","key":"1"}),
    createElement(Path, {"d":"M22 7.5C22 10.539 19.535 13 16.5 13C13.465 13 11 10.539 11 7.5C11 4.461 13.465 2 16.5 2C19.535 2 22 4.461 22 7.5Z","key":"2"}),
    createElement(Path, {"d":"M17 9L17 6L16 6","key":"3"})
  );
});

ChatOneCircleBroken.displayName = 'ChatOneCircleBroken';

export default ChatOneCircleBroken;
export { ChatOneCircleBroken };
