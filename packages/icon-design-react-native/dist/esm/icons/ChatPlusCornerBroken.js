import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatPlusCornerBroken = forwardRef(function ChatPlusCornerBroken(
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
    createElement(Path, {"d":"M19 2L19 8","key":"0"}),
    createElement(Path, {"d":"M22 5L16 5","key":"1"}),
    createElement(Path, {"d":"M12 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18","key":"2"}),
    createElement(Path, {"d":"M22 12L22 15C22 16.656 20.656 18 19 18L15 18L12 22","key":"3"})
  );
});

ChatPlusCornerBroken.displayName = 'ChatPlusCornerBroken';

export default ChatPlusCornerBroken;
export { ChatPlusCornerBroken };
