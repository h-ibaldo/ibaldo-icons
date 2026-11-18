import { createElement, forwardRef } from 'react';

const ChatSearchSharp = forwardRef(function ChatSearchSharp(
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
    createElement('path', {"d":"M12 2C6.477 2 2 6.477 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z","key":"0"}),
    createElement('path', {"d":"M15 11.5C15 13.434 13.434 15 11.5 15C9.566 15 8 13.434 8 11.5C8 9.566 9.566 8 11.5 8C13.434 8 15 9.566 15 11.5Z","key":"1"}),
    createElement('path', {"d":"M13.973 13.977L16 16","key":"2"})
  );
});

ChatSearchSharp.displayName = 'ChatSearchSharp';

export default ChatSearchSharp;
export { ChatSearchSharp };
