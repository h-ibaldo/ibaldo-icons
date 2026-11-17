import { createElement, forwardRef } from 'react';

const ChatDotsVerticalSharp = forwardRef(function ChatDotsVerticalSharp(
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
    createElement('path', {"d":"M22 2L22 2","key":"0"}),
    createElement('path', {"d":"M22 6L22 6","key":"1"}),
    createElement('path', {"d":"M22 10L22 10","key":"2"}),
    createElement('path', {"d":"M17 3.348C15.527 2.496 13.824 2 12 2C6.477 2 2 6.477 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C16.477 22 20.266 19.055 21.539 15","key":"3"})
  );
});

ChatDotsVerticalSharp.displayName = 'ChatDotsVerticalSharp';

export default ChatDotsVerticalSharp;
export { ChatDotsVerticalSharp };
