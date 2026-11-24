import { createElement, forwardRef } from 'react';

const ChatTextLargeSide = forwardRef(function ChatTextLargeSide(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('path', {"d":"M7 20L20 20C21.105 20 22 19.105 22 18L22 6C22 4.895 21.105 4 20 4L7 4C5.895 4 5 4.895 5 6L5 10L2 12L5 14L5 18C5 19.105 5.895 20 7 20Z","key":"0"}),
    createElement('path', {"d":"M9 12L18 12","key":"1"}),
    createElement('path', {"d":"M9 8L18 8","key":"2"}),
    createElement('path', {"d":"M9 16L15 16","key":"3"})
  );
});

ChatTextLargeSide.displayName = 'ChatTextLargeSide';

export default ChatTextLargeSide;
export { ChatTextLargeSide };
