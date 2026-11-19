import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatStackOffTooltip = forwardRef(function ChatStackOffTooltip(
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
    createElement(Path, {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L8 2","key":"0"}),
    createElement(Path, {"d":"M2 2L20 21","key":"1"}),
    createElement(Path, {"d":"M5.789 6L5 6C3.344 6 2 7.344 2 9L2 15C2 16.656 3.344 18 5 18L7 18L10 22L13 18L15 18C15.621 18 16.195 17.813 16.676 17.488","key":"2"}),
    createElement(Path, {"d":"M18 12.723L18 9C18 7.344 16.656 6 15 6L11.633 6","key":"3"})
  );
});

ChatStackOffTooltip.displayName = 'ChatStackOffTooltip';

export default ChatStackOffTooltip;
export { ChatStackOffTooltip };
