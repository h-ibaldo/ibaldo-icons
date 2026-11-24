import { createElement, forwardRef } from 'react';

const ChatStackReplyAllNotch = forwardRef(function ChatStackReplyAllNotch(
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
    createElement('path', {"d":"M2 4L2 12C2 13.105 2.895 14 4 14L5 14L5 18L10 14L16 14C17.105 14 18 13.105 18 12L18 4C18 2.895 17.105 2 16 2L4 2C2.895 2 2 2.895 2 4Z","key":"0"}),
    createElement('path', {"d":"M22 8L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L12 18","key":"1"}),
    createElement('path', {"d":"M11 10L9 8L11 6","key":"2"}),
    createElement('path', {"d":"M7 10L5 8L7 6","key":"3"}),
    createElement('path', {"d":"M9 8L13 8C14.105 8 15 8.895 15 10","key":"4"})
  );
});

ChatStackReplyAllNotch.displayName = 'ChatStackReplyAllNotch';

export default ChatStackReplyAllNotch;
export { ChatStackReplyAllNotch };
