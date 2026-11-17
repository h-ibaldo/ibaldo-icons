import { createElement, forwardRef } from 'react';

const ChatSunSharp = forwardRef(function ChatSunSharp(
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
    createElement('path', {"d":"M17 12C14.789 12 13 10.211 13 8C13 5.789 14.789 4 17 4C19.211 4 21 5.789 21 8C21 10.211 19.211 12 17 12Z","key":"0"}),
    createElement('path', {"d":"M17 2L17 4","key":"1"}),
    createElement('path', {"d":"M17 12L17 14","key":"2"}),
    createElement('path', {"d":"M22.195 5L20.465 6","key":"3"}),
    createElement('path', {"d":"M13.535 10L11.805 11","key":"4"}),
    createElement('path', {"d":"M22.195 11L20.465 10","key":"5"}),
    createElement('path', {"d":"M13.535 6L11.805 5","key":"6"}),
    createElement('path', {"d":"M11 2.051C5.945 2.551 2 6.816 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C16.477 22 20.266 19.055 21.539 15","key":"7"})
  );
});

ChatSunSharp.displayName = 'ChatSunSharp';

export default ChatSunSharp;
export { ChatSunSharp };
