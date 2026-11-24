import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatImageBroken = forwardRef(function ChatImageBroken(
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
    createElement(Path, {"d":"M12 22L15 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18","key":"0"}),
    createElement(Path, {"d":"M6 13L10 9L14 13","key":"1"}),
    createElement(Path, {"d":"M14 13L16 11L18 13","key":"2"}),
    createElement(Path, {"d":"M15.5 7C15.223 7 15 6.777 15 6.5C15 6.223 15.223 6 15.5 6C15.777 6 16 6.223 16 6.5C16 6.777 15.777 7 15.5 7Z","key":"3"})
  );
});

ChatImageBroken.displayName = 'ChatImageBroken';

export default ChatImageBroken;
export { ChatImageBroken };
