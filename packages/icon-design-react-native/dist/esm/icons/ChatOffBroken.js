import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatOffBroken = forwardRef(function ChatOffBroken(
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
    createElement(Path, {"d":"M3 2L21 21","key":"0"}),
    createElement(Path, {"d":"M22 15L22 7C22 5.344 20.656 4 19 4L10.844 4","key":"1"}),
    createElement(Path, {"d":"M4.906 4.012C3.293 4.063 2 5.375 2 7L2 15C2 16.656 3.344 18 5 18L9 18","key":"2"}),
    createElement(Path, {"d":"M12 22L15 18L18.156 18","key":"3"})
  );
});

ChatOffBroken.displayName = 'ChatOffBroken';

export default ChatOffBroken;
export { ChatOffBroken };
