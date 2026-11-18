import { createElement, forwardRef } from 'react';

const ChatStackHashNotch = forwardRef(function ChatStackHashNotch(
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
    createElement('path', {"d":"M2 4L2 13C2 14.105 2.895 15 4 15L5 15L5 19L10 15L16 15C17.105 15 18 14.105 18 13L18 4C18 2.895 17.105 2 16 2L4 2C2.895 2 2 2.895 2 4Z","key":"0"}),
    createElement('path', {"d":"M22 8L22 17C22 18.105 21.105 19 20 19L19 19L19 22L14 19L12 19","key":"1"}),
    createElement('path', {"d":"M9 5L7 12","key":"2"}),
    createElement('path', {"d":"M13 5L11 12","key":"3"}),
    createElement('path', {"d":"M7 7L14 7","key":"4"}),
    createElement('path', {"d":"M6 10L13 10","key":"5"})
  );
});

ChatStackHashNotch.displayName = 'ChatStackHashNotch';

export default ChatStackHashNotch;
export { ChatStackHashNotch };
