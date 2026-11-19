import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatStackDotsVerticalFacing = forwardRef(function ChatStackDotsVerticalFacing(
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
    createElement(Path, {"d":"M2 4L2 18L7 14L15 14C16.105 14 17 13.105 17 12L17 4C17 2.895 16.105 2 15 2L4 2C2.895 2 2 2.895 2 4Z","key":"0"}),
    createElement(Path, {"d":"M8 17C8 18.105 8.895 19 10 19L17 19L22 22L22 15","key":"1"}),
    createElement(Path, {"d":"M22 2L22 2","key":"2"}),
    createElement(Path, {"d":"M22 6L22 6","key":"3"}),
    createElement(Path, {"d":"M22 10L22 10","key":"4"})
  );
});

ChatStackDotsVerticalFacing.displayName = 'ChatStackDotsVerticalFacing';

export default ChatStackDotsVerticalFacing;
export { ChatStackDotsVerticalFacing };
