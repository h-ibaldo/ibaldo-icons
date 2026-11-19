import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatHeartWide = forwardRef(function ChatHeartWide(
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
    createElement(Path, {"d":"M15 3L9 3C5.133 3 2 6.133 2 10C2 13.172 4.109 15.848 7 16.707L7 21L11.57 17L15 17C18.867 17 22 13.867 22 10C22 6.133 18.867 3 15 3Z","key":"0"}),
    createElement(Path, {"d":"M11.293 13.414L8.5 10.621C7.672 9.793 7.672 8.449 8.5 7.621C9.328 6.793 10.672 6.793 11.5 7.621L12 8.121L12.5 7.621C13.328 6.793 14.672 6.793 15.5 7.621C16.328 8.449 16.328 9.793 15.5 10.621L12.707 13.414C12.316 13.805 11.684 13.805 11.293 13.414Z","key":"1"})
  );
});

ChatHeartWide.displayName = 'ChatHeartWide';

export default ChatHeartWide;
export { ChatHeartWide };
