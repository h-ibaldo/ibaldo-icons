import { createElement, forwardRef } from 'react';

const ChatStackImageCornerLayered = forwardRef(function ChatStackImageCornerLayered(
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
    createElement('path', {"d":"M5 6L5 5C5 3.344 6.344 2 8 2L19 2C20.656 2 22 3.344 22 5L22 8","key":"0"}),
    createElement('path', {"d":"M20 22L14 22C12.895 22 12 21.105 12 20L12 14C12 12.895 12.895 12 14 12L20 12C21.105 12 22 12.895 22 14L22 20C22 21.105 21.105 22 20 22Z","key":"1"}),
    createElement('path', {"d":"M22 16C18.688 16 16 18.688 16 22","key":"2"}),
    createElement('path', {"d":"M15 15L15 15","key":"3"}),
    createElement('path', {"d":"M17.816 8C17.402 6.84 16.305 6 15 6L5 6C3.344 6 2 7.344 2 9L2 22L7 18L8 18","key":"4"})
  );
});

ChatStackImageCornerLayered.displayName = 'ChatStackImageCornerLayered';

export default ChatStackImageCornerLayered;
export { ChatStackImageCornerLayered };
