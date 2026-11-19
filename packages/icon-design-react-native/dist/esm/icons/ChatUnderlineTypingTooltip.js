import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatUnderlineTypingTooltip = forwardRef(function ChatUnderlineTypingTooltip(
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
    createElement(Path, {"d":"M2 5L2 11C2 12.656 3.344 14 5 14L8 14L12 18L16 14L19 14C20.656 14 22 12.656 22 11L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z","key":"0"}),
    createElement(Path, {"d":"M19 22L5 22","key":"1"}),
    createElement(Path, {"d":"M8 8L8 8","key":"2"}),
    createElement(Path, {"d":"M12 8L12 8","key":"3"}),
    createElement(Path, {"d":"M16 8L16 8","key":"4"})
  );
});

ChatUnderlineTypingTooltip.displayName = 'ChatUnderlineTypingTooltip';

export default ChatUnderlineTypingTooltip;
export { ChatUnderlineTypingTooltip };
