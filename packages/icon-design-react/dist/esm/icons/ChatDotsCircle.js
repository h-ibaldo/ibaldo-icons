import { createElement, forwardRef } from 'react';

const ChatDotsCircle = forwardRef(function ChatDotsCircle(
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
    createElement('path', {"d":"M13.855 4.145C13.254 4.055 12.633 4 12 4C6.477 4 2 7.582 2 12C2 14.84 3.855 17.328 6.645 18.75C6.664 19.895 6.391 21.082 5.719 22.113C5.48 22.48 5.766 22.973 6.195 22.898C8.313 22.535 9.781 21.23 10.715 19.926C11.137 19.969 11.563 20 12 20C17.523 20 22 16.418 22 12C22 11.262 21.867 10.551 21.629 9.871","key":"0"}),
    createElement('path', {"d":"M22 8C22 10.762 19.762 13 17 13C14.238 13 12 10.762 12 8C12 5.238 14.238 3 17 3C19.762 3 22 5.238 22 8Z","key":"1"}),
    createElement('path', {"d":"M15.5 8L15.5 8","key":"2"}),
    createElement('path', {"d":"M18.5 8L18.5 8","key":"3"})
  );
});

ChatDotsCircle.displayName = 'ChatDotsCircle';

export default ChatDotsCircle;
export { ChatDotsCircle };
