import { createElement, forwardRef } from 'react';

const ChatStackLockCorner = forwardRef(function ChatStackLockCorner(
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
    createElement('path', {"d":"M8.613 15.445C9.676 17.469 12 18.898 14.73 18.988C16.211 20.141 18.387 21 21 21C20.344 20.34 19.688 19.242 19.316 17.715C20.016 17.246 20.598 16.66 21.047 16","key":"2"}),
    createElement('path', {"d":"M11 3.262C10.363 3.098 9.695 3 9 3C5.133 3 2 5.688 2 9C2 10.914 3.051 12.617 4.684 13.715C4.313 15.242 3.656 16.34 3 17C5.613 17 7.789 16.141 9.27 14.988C10.246 14.957 11.168 14.75 12 14.41","key":"3"})
  );
});

ChatStackLockCorner.displayName = 'ChatStackLockCorner';

export default ChatStackLockCorner;
export { ChatStackLockCorner };
