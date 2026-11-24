import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatForwardCornerWide = forwardRef(function ChatForwardCornerWide(
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
    createElement(Path, {"d":"M15 4L22 4","key":"0"}),
    createElement(Path, {"d":"M20 2L22 4L20 6","key":"1"}),
    createElement(Path, {"d":"M10 4L9 4C5.133 4 2 7.133 2 11C2 14.172 4.109 16.848 7 17.707L7 22L11.57 18L15 18C18.867 18 22 14.867 22 11C22 10.66 21.969 10.328 21.922 10","key":"2"})
  );
});

ChatForwardCornerWide.displayName = 'ChatForwardCornerWide';

export default ChatForwardCornerWide;
export { ChatForwardCornerWide };
