import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatHeartTooltip = forwardRef(function ChatHeartTooltip(
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
    createElement(Path, {"d":"M2 5L2 15C2 16.656 3.344 18 5 18L8 18L12 22L16 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z","key":"0"}),
    createElement(Path, {"d":"M13 6.828L12 7.828L11 6.828C9.895 5.723 8.105 5.723 7 6.828C5.895 7.934 5.895 9.723 7 10.828L10.586 14.414C11.367 15.195 12.633 15.195 13.414 14.414L17 10.828C18.105 9.723 18.105 7.934 17 6.828C15.895 5.723 14.105 5.723 13 6.828Z","key":"1"})
  );
});

ChatHeartTooltip.displayName = 'ChatHeartTooltip';

export default ChatHeartTooltip;
export { ChatHeartTooltip };
