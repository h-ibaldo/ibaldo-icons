import { createElement, forwardRef } from 'react';

const ChatStackLockCornerSlant = forwardRef(function ChatStackLockCornerSlant(
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
    createElement('path', {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L13 2","key":"0"}),
    createElement('path', {"d":"M10 12L2 12L2 7L10 7Z","key":"1"}),
    createElement('path', {"d":"M3 7L3 5C3 3.344 4.344 2 6 2C7.656 2 9 3.344 9 5L9 7","key":"2"}),
    createElement('path', {"d":"M2.184 16C2.598 17.16 3.695 18 5 18L7 18L7 22L13 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.344 16.656 6 15 6L14 6","key":"3"})
  );
});

ChatStackLockCornerSlant.displayName = 'ChatStackLockCornerSlant';

export default ChatStackLockCornerSlant;
export { ChatStackLockCornerSlant };
