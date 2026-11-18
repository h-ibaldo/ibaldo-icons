import { createElement, forwardRef } from 'react';

const ChatSunRound = forwardRef(function ChatSunRound(
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
    createElement('path', {"d":"M16.805 12C14.594 12 12.805 10.211 12.805 8C12.805 5.789 14.594 4 16.805 4C19.012 4 20.805 5.789 20.805 8C20.805 10.211 19.012 12 16.805 12Z","key":"0"}),
    createElement('path', {"d":"M16.805 2L16.805 4","key":"1"}),
    createElement('path', {"d":"M16.805 12L16.805 14","key":"2"}),
    createElement('path', {"d":"M22 5L20.27 6","key":"3"}),
    createElement('path', {"d":"M13.34 10L11.609 11","key":"4"}),
    createElement('path', {"d":"M22 11L20.27 10","key":"5"}),
    createElement('path', {"d":"M13.34 6L11.609 5","key":"6"}),
    createElement('path', {"d":"M8.805 2.461C4.746 3.734 1.805 7.523 1.805 12C1.805 14.625 2.824 17.008 4.477 18.789L1.805 22L11.805 22C15.902 22 19.422 19.531 20.965 16","key":"7"})
  );
});

ChatSunRound.displayName = 'ChatSunRound';

export default ChatSunRound;
export { ChatSunRound };
