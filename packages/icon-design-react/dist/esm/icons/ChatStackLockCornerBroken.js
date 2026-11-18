import { createElement, forwardRef } from 'react';

const ChatStackLockCornerBroken = forwardRef(function ChatStackLockCornerBroken(
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
    createElement('path', {"d":"M12 2L5 2C3.344 2 2 3.344 2 5L2 13","key":"0"}),
    createElement('path', {"d":"M11 6L9 6C7.344 6 6 7.344 6 9L6 15C6 16.656 7.344 18 9 18L11 18","key":"1"}),
    createElement('path', {"d":"M14 22L17 18L19 18C20.656 18 22 16.656 22 15","key":"2"}),
    createElement('path', {"d":"M22 12L14 12L14 7L22 7Z","key":"3"}),
    createElement('path', {"d":"M15 7L15 5C15 3.344 16.344 2 18 2C19.656 2 21 3.344 21 5L21 7","key":"4"})
  );
});

ChatStackLockCornerBroken.displayName = 'ChatStackLockCornerBroken';

export default ChatStackLockCornerBroken;
export { ChatStackLockCornerBroken };
