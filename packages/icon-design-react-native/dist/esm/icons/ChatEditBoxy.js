import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatEditBoxy = forwardRef(function ChatEditBoxy(
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
    createElement(Path, {"d":"M14 2L5 2C3.344 2 2 3.344 2 5L2 22L7 18L19 18C20.656 18 22 16.656 22 15L22 12","key":"0"}),
    createElement(Path, {"d":"M21.414 3.414L21.586 3.586C22.367 4.367 22.367 5.633 21.586 6.414L15 13L12 13L12 10L18.586 3.414C19.367 2.633 20.633 2.633 21.414 3.414Z","key":"1"}),
    createElement(Path, {"d":"M17 5L20 8","key":"2"})
  );
});

ChatEditBoxy.displayName = 'ChatEditBoxy';

export default ChatEditBoxy;
export { ChatEditBoxy };
