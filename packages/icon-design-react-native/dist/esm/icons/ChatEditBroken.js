import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatEditBroken = forwardRef(function ChatEditBroken(
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
    createElement(Path, {"d":"M14 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18","key":"0"}),
    createElement(Path, {"d":"M22 12L22 15C22 16.656 20.656 18 19 18L15 18L12 22","key":"1"}),
    createElement(Path, {"d":"M21.414 3.414L21.586 3.586C22.367 4.367 22.367 5.633 21.586 6.414L15 13L12 13L12 10L18.586 3.414C19.367 2.633 20.633 2.633 21.414 3.414Z","key":"2"}),
    createElement(Path, {"d":"M17 5L20 8","key":"3"})
  );
});

ChatEditBroken.displayName = 'ChatEditBroken';

export default ChatEditBroken;
export { ChatEditBroken };
