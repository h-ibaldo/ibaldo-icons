import { createElement, forwardRef } from 'react';

const ChatCheckDoubleTall = forwardRef(function ChatCheckDoubleTall(
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
    createElement('path', {"d":"M12 22C17.332 19.867 20 14.801 20 10C20 5.582 16.418 2 12 2C7.582 2 4 5.582 4 10C4 14.418 7.582 18 12 18Z","key":"0"}),
    createElement('path', {"d":"M8 9L8.5 11L12 8","key":"1"}),
    createElement('path', {"d":"M12.176 10.707L12.5 12L16 9","key":"2"})
  );
});

ChatCheckDoubleTall.displayName = 'ChatCheckDoubleTall';

export default ChatCheckDoubleTall;
export { ChatCheckDoubleTall };
