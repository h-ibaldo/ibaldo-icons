import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatTextFlat = forwardRef(function ChatTextFlat(
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
    createElement(Path, {"d":"M20 18C21.105 18 22 17.105 22 16L22 8C22 6.895 21.105 6 20 6L7 6C5.895 6 5 6.895 5 8L5 14L2 18Z","key":"0"}),
    createElement(Path, {"d":"M9 10L18 10","key":"1"}),
    createElement(Path, {"d":"M9 14L15 14","key":"2"})
  );
});

ChatTextFlat.displayName = 'ChatTextFlat';

export default ChatTextFlat;
export { ChatTextFlat };
