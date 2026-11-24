import { createElement, forwardRef } from 'react';

const ChatStackReplyAllCornerFlipped = forwardRef(function ChatStackReplyAllCornerFlipped(
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
    createElement('path', {"d":"M22 14L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L7 18","key":"0"}),
    createElement('path', {"d":"M18 10L16 8L18 6","key":"1"}),
    createElement('path', {"d":"M14 10L12 8L14 6","key":"2"}),
    createElement('path', {"d":"M16 8L20 8C21.105 8 22 8.895 22 10","key":"3"}),
    createElement('path', {"d":"M9 5.199L5 2L5 6L4 6C2.895 6 2 6.895 2 8L2 12C2 13.105 2.895 14 4 14L16 14","key":"4"})
  );
});

ChatStackReplyAllCornerFlipped.displayName = 'ChatStackReplyAllCornerFlipped';

export default ChatStackReplyAllCornerFlipped;
export { ChatStackReplyAllCornerFlipped };
