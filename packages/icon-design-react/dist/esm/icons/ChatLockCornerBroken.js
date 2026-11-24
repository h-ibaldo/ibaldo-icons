import { createElement, forwardRef } from 'react';

const ChatLockCornerBroken = forwardRef(function ChatLockCornerBroken(
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
    createElement('path', {"d":"M11 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18","key":"0"}),
    createElement('path', {"d":"M22 12L14 12L14 7L22 7Z","key":"1"}),
    createElement('path', {"d":"M15 7L15 5C15 3.344 16.344 2 18 2C19.656 2 21 3.344 21 5L21 7","key":"2"}),
    createElement('path', {"d":"M21.816 16C21.402 17.164 20.305 18 19 18L15 18L12 22","key":"3"})
  );
});

ChatLockCornerBroken.displayName = 'ChatLockCornerBroken';

export default ChatLockCornerBroken;
export { ChatLockCornerBroken };
