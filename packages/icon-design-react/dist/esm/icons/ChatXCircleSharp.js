import { createElement, forwardRef } from 'react';

const ChatXCircleSharp = forwardRef(function ChatXCircleSharp(
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
    createElement('path', {"d":"M22 7.5C22 10.539 19.539 13 16.5 13C13.461 13 11 10.539 11 7.5C11 4.461 13.461 2 16.5 2C19.539 2 22 4.461 22 7.5Z","key":"0"}),
    createElement('path', {"d":"M14.75 9.25L18.25 5.75","key":"1"}),
    createElement('path', {"d":"M18.25 9.25L14.75 5.75","key":"2"}),
    createElement('path', {"d":"M10 2.199C5.438 3.129 2 7.16 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C16.84 22 20.871 18.566 21.801 14","key":"3"})
  );
});

ChatXCircleSharp.displayName = 'ChatXCircleSharp';

export default ChatXCircleSharp;
export { ChatXCircleSharp };
