import { createElement, forwardRef } from 'react';

const ChatXDoubleRound = forwardRef(function ChatXDoubleRound(
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
    createElement('path', {"d":"M12 2C6.477 2 2 6.477 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z","key":"0"}),
    createElement('path', {"d":"M14 14L18 10","key":"1"}),
    createElement('path', {"d":"M18 14L14 10","key":"2"}),
    createElement('path', {"d":"M6 14L10 10","key":"3"}),
    createElement('path', {"d":"M10 14L6 10","key":"4"})
  );
});

ChatXDoubleRound.displayName = 'ChatXDoubleRound';

export default ChatXDoubleRound;
export { ChatXDoubleRound };
