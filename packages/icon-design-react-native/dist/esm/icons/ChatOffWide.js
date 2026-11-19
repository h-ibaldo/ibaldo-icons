import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatOffWide = forwardRef(function ChatOffWide(
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
    createElement(Path, {"d":"M3 2L21 21","key":"0"}),
    createElement(Path, {"d":"M20.93 14.707C21.605 13.629 22 12.363 22 11C22 7.133 18.867 4 15 4L10.789 4","key":"1"}),
    createElement(Path, {"d":"M5.684 4.836C3.492 6.016 2 8.336 2 11C2 14.172 4.109 16.848 7 17.707L7 22L11.57 18L15 18C15.941 18 16.84 17.813 17.66 17.473","key":"2"})
  );
});

ChatOffWide.displayName = 'ChatOffWide';

export default ChatOffWide;
export { ChatOffWide };
