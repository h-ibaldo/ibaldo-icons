import { createElement, forwardRef } from 'react';

const ChatSunBroken = forwardRef(function ChatSunBroken(
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
    createElement('path', {"d":"M10 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18","key":"0"}),
    createElement('path', {"d":"M22 15C22 16.656 20.656 18 19 18L15 18L12 22","key":"1"}),
    createElement('path', {"d":"M17 12C14.789 12 13 10.211 13 8C13 5.789 14.789 4 17 4C19.211 4 21 5.789 21 8C21 10.211 19.211 12 17 12Z","key":"2"}),
    createElement('path', {"d":"M17 2L17 4","key":"3"}),
    createElement('path', {"d":"M17 12L17 14","key":"4"}),
    createElement('path', {"d":"M22.195 5L20.465 6","key":"5"}),
    createElement('path', {"d":"M13.535 10L11.805 11","key":"6"}),
    createElement('path', {"d":"M22.195 11L20.465 10","key":"7"}),
    createElement('path', {"d":"M13.535 6L11.805 5","key":"8"})
  );
});

ChatSunBroken.displayName = 'ChatSunBroken';

export default ChatSunBroken;
export { ChatSunBroken };
