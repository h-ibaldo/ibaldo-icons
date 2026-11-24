import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatCheckCornerBroken = forwardRef(function ChatCheckCornerBroken(
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
    createElement(Path, {"d":"M16 4L17.5 6L22 2","key":"0"}),
    createElement(Path, {"d":"M12 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18","key":"1"}),
    createElement(Path, {"d":"M22 9L22 15C22 16.656 20.656 18 19 18L15 18L12 22","key":"2"})
  );
});

ChatCheckCornerBroken.displayName = 'ChatCheckCornerBroken';

export default ChatCheckCornerBroken;
export { ChatCheckCornerBroken };
