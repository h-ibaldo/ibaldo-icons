import { createElement, forwardRef } from 'react';

const ChatQuoteSharp = forwardRef(function ChatQuoteSharp(
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
    createElement('path', {"d":"M14 9L17 9L17 11L14 11Z","key":"0"}),
    createElement('path', {"d":"M14 15C15.723 14.539 17 12.93 17 11","key":"1"}),
    createElement('path', {"d":"M7 9L10 9L10 11L7 11Z","key":"2"}),
    createElement('path', {"d":"M7 15C8.723 14.539 10 12.93 10 11","key":"3"}),
    createElement('path', {"d":"M12 2C6.477 2 2 6.477 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z","key":"4"})
  );
});

ChatQuoteSharp.displayName = 'ChatQuoteSharp';

export default ChatQuoteSharp;
export { ChatQuoteSharp };
