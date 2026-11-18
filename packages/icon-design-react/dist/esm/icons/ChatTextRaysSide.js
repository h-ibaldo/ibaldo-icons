import { createElement, forwardRef } from 'react';

const ChatTextRaysSide = forwardRef(function ChatTextRaysSide(
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
    createElement('path', {"d":"M7 18L20 18C21.105 18 22 17.105 22 16L22 8C22 6.895 21.105 6 20 6L7 6C5.895 6 5 6.895 5 8L5 10L2 12L5 14L5 16C5 17.105 5.895 18 7 18Z","key":"0"}),
    createElement('path', {"d":"M9 10L18 10","key":"1"}),
    createElement('path', {"d":"M9 14L15 14","key":"2"}),
    createElement('path', {"d":"M13 2L13 3","key":"3"}),
    createElement('path', {"d":"M7 2L8 3","key":"4"}),
    createElement('path', {"d":"M19 2L18 3","key":"5"}),
    createElement('path', {"d":"M13 22L13 21","key":"6"}),
    createElement('path', {"d":"M19 22L18 21","key":"7"}),
    createElement('path', {"d":"M7 22L8 21","key":"8"})
  );
});

ChatTextRaysSide.displayName = 'ChatTextRaysSide';

export default ChatTextRaysSide;
export { ChatTextRaysSide };
