import { createElement, forwardRef } from 'react';

const ChatSunSlant = forwardRef(function ChatSunSlant(
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
    createElement('path', {"d":"M10 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L8 18L8 22L14 18L19 18C20.656 18 22 16.656 22 15","key":"0"}),
    createElement('path', {"d":"M17 12C14.789 12 13 10.211 13 8C13 5.789 14.789 4 17 4C19.211 4 21 5.789 21 8C21 10.211 19.211 12 17 12Z","key":"1"}),
    createElement('path', {"d":"M17 2L17 4","key":"2"}),
    createElement('path', {"d":"M17 12L17 14","key":"3"}),
    createElement('path', {"d":"M22.195 5L20.465 6","key":"4"}),
    createElement('path', {"d":"M13.535 10L11.805 11","key":"5"}),
    createElement('path', {"d":"M22.195 11L20.465 10","key":"6"}),
    createElement('path', {"d":"M13.535 6L11.805 5","key":"7"})
  );
});

ChatSunSlant.displayName = 'ChatSunSlant';

export default ChatSunSlant;
export { ChatSunSlant };
