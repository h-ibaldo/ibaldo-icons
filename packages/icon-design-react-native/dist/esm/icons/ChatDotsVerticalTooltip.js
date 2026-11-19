import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatDotsVerticalTooltip = forwardRef(function ChatDotsVerticalTooltip(
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
    createElement(Path, {"d":"M17 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L8 18L12 22L16 18L19 18C20.656 18 22 16.656 22 15","key":"0"}),
    createElement(Path, {"d":"M22 2L22 2","key":"1"}),
    createElement(Path, {"d":"M22 6L22 6","key":"2"}),
    createElement(Path, {"d":"M22 10L22 10","key":"3"})
  );
});

ChatDotsVerticalTooltip.displayName = 'ChatDotsVerticalTooltip';

export default ChatDotsVerticalTooltip;
export { ChatDotsVerticalTooltip };
