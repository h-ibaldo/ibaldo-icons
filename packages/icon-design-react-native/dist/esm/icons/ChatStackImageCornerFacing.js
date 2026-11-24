import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatStackImageCornerFacing = forwardRef(function ChatStackImageCornerFacing(
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
    createElement(Path, {"d":"M9 2L4 2C2.895 2 2 2.895 2 4L2 18L7 14L10 14","key":"0"}),
    createElement(Path, {"d":"M8 17C8 18.105 8.895 19 10 19L17 19L22 22L22 15","key":"1"}),
    createElement(Path, {"d":"M20 12L14 12C12.895 12 12 11.105 12 10L12 4C12 2.895 12.895 2 14 2L20 2C21.105 2 22 2.895 22 4L22 10C22 11.105 21.105 12 20 12Z","key":"2"}),
    createElement(Path, {"d":"M22 6C18.688 6 16 8.688 16 12","key":"3"}),
    createElement(Path, {"d":"M15 5L15 5","key":"4"})
  );
});

ChatStackImageCornerFacing.displayName = 'ChatStackImageCornerFacing';

export default ChatStackImageCornerFacing;
export { ChatStackImageCornerFacing };
