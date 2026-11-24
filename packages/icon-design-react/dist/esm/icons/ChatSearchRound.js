import { createElement, forwardRef } from 'react';

const ChatSearchRound = forwardRef(function ChatSearchRound(
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
    createElement('path', {"d":"M15.02 11.5C15.02 13.434 13.449 15 11.52 15C9.582 15 8.02 13.434 8.02 11.5C8.02 9.566 9.582 8 11.52 8C13.449 8 15.02 9.566 15.02 11.5Z","key":"1"}),
    createElement('path', {"d":"M13.992 13.973L16.016 16","key":"2"})
  );
});

ChatSearchRound.displayName = 'ChatSearchRound';

export default ChatSearchRound;
export { ChatSearchRound };
