import { createElement, forwardRef } from 'react';

const ChatStackOneCircleNotch = forwardRef(function ChatStackOneCircleNotch(
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
    createElement('path', {"d":"M22 15L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L12 18","key":"0"}),
    createElement('path', {"d":"M9 2L4 2C2.895 2 2 2.895 2 4L2 12C2 13.105 2.895 14 4 14L5 14L5 18L10 14","key":"1"}),
    createElement('path', {"d":"M22 7.5C22 10.535 19.535 13 16.5 13C13.465 13 11 10.535 11 7.5C11 4.465 13.465 2 16.5 2C19.535 2 22 4.465 22 7.5Z","key":"2"}),
    createElement('path', {"d":"M17 9L17 6L16 6","key":"3"})
  );
});

ChatStackOneCircleNotch.displayName = 'ChatStackOneCircleNotch';

export default ChatStackOneCircleNotch;
export { ChatStackOneCircleNotch };
