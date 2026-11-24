import { createElement, forwardRef } from 'react';

const ChatDotsCircleWide = forwardRef(function ChatDotsCircleWide(
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
    createElement('path', {"d":"M22 7C22 9.762 19.762 12 17 12C14.238 12 12 9.762 12 7C12 4.238 14.238 2 17 2C19.762 2 22 4.238 22 7Z","key":"0"}),
    createElement('path', {"d":"M14.027 3L9 3C5.133 3 2 6.133 2 10C2 13.172 4.109 15.848 7 16.707L7 21L11.57 17L15 17C18.867 17 22 13.867 22 10C22 9.43 21.922 8.875 21.793 8.344","key":"1"}),
    createElement('path', {"d":"M15.5 7L15.5 7","key":"2"}),
    createElement('path', {"d":"M18.5 7L18.5 7","key":"3"})
  );
});

ChatDotsCircleWide.displayName = 'ChatDotsCircleWide';

export default ChatDotsCircleWide;
export { ChatDotsCircleWide };
