import { createElement, forwardRef } from 'react';

const ChatReplyAllSharp = forwardRef(function ChatReplyAllSharp(
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
    createElement('path', {"d":"M13.023 13L11.023 11L13.023 9","key":"1"}),
    createElement('path', {"d":"M9.023 13L7.023 11L9.023 9","key":"2"}),
    createElement('path', {"d":"M11.023 11L14.023 11C15.68 11 17.023 12.344 17.023 14L17.023 15","key":"3"})
  );
});

ChatReplyAllSharp.displayName = 'ChatReplyAllSharp';

export default ChatReplyAllSharp;
export { ChatReplyAllSharp };
