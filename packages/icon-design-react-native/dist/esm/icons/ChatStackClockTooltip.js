import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatStackClockTooltip = forwardRef(function ChatStackClockTooltip(
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
    createElement(Path, {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L14 2","key":"0"}),
    createElement(Path, {"d":"M12 7C12 9.762 9.762 12 7 12C4.238 12 2 9.762 2 7C2 4.238 4.238 2 7 2C9.762 2 12 4.238 12 7Z","key":"1"}),
    createElement(Path, {"d":"M9 7L7 7L7 5","key":"2"}),
    createElement(Path, {"d":"M2 14L2 15C2 16.656 3.344 18 5 18L7 18L10 22L13 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.695 17.16 6.598 16 6.184","key":"3"})
  );
});

ChatStackClockTooltip.displayName = 'ChatStackClockTooltip';

export default ChatStackClockTooltip;
export { ChatStackClockTooltip };
