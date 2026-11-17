import { createElement, forwardRef } from 'react';

const ChatOffBoxy = forwardRef(function ChatOffBoxy(
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
    createElement('path', {"d":"M3 2L21 21","key":"0"}),
    createElement('path', {"d":"M22 16L22 8C22 6.344 20.656 5 19 5L11.738 5","key":"1"}),
    createElement('path', {"d":"M5.844 5L5 5C3.344 5 2 6.344 2 8L2 22L7 18L18.156 18","key":"2"})
  );
});

ChatOffBoxy.displayName = 'ChatOffBoxy';

export default ChatOffBoxy;
export { ChatOffBoxy };
