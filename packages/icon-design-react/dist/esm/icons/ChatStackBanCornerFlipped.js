import { createElement, forwardRef } from 'react';

const ChatStackBanCornerFlipped = forwardRef(function ChatStackBanCornerFlipped(
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
    createElement('path', {"d":"M22 15L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L7 18","key":"0"}),
    createElement('path', {"d":"M8 4L5 2L5 6L4 6C2.895 6 2 6.895 2 8L2 12C2 13.105 2.895 14 4 14L11 14","key":"1"}),
    createElement('path', {"d":"M22 7C22 9.762 19.762 12 17 12C14.238 12 12 9.762 12 7C12 4.238 14.238 2 17 2C19.762 2 22 4.238 22 7Z","key":"2"}),
    createElement('path', {"d":"M20.535 3.465L13.465 10.535","key":"3"})
  );
});

ChatStackBanCornerFlipped.displayName = 'ChatStackBanCornerFlipped';

export default ChatStackBanCornerFlipped;
export { ChatStackBanCornerFlipped };
