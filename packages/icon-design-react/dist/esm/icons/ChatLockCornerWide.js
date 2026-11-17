import { createElement, forwardRef } from 'react';

const ChatLockCornerWide = forwardRef(function ChatLockCornerWide(
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
    createElement('path', {"d":"M22 12L14 12L14 7L22 7Z","key":"0"}),
    createElement('path', {"d":"M15 7L15 5C15 3.344 16.344 2 18 2C19.656 2 21 3.344 21 5L21 7","key":"1"}),
    createElement('path', {"d":"M11 3L9 3C5.133 3 2 6.133 2 10C2 13.172 4.109 15.848 7 16.707L7 21L11.57 17L15 17C16.316 17 17.539 16.633 18.594 16","key":"2"})
  );
});

ChatLockCornerWide.displayName = 'ChatLockCornerWide';

export default ChatLockCornerWide;
export { ChatLockCornerWide };
