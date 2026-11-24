import { createElement, forwardRef } from 'react';

const ChatWarningRound = forwardRef(function ChatWarningRound(
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
    createElement('path', {"d":"M13.77 3.004L9.902 9.699C9.059 11.168 10.117 13 11.809 13L19.191 13C20.883 13 21.941 11.168 21.098 9.699L17.234 3.004C16.461 1.668 14.539 1.668 13.77 3.004Z","key":"0"}),
    createElement('path', {"d":"M15.5 7L15.5 6","key":"1"}),
    createElement('path', {"d":"M15.5 10L15.5 10","key":"2"}),
    createElement('path', {"d":"M9 2.461C4.941 3.734 2 7.523 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C15.699 22 18.922 19.984 20.652 17","key":"3"})
  );
});

ChatWarningRound.displayName = 'ChatWarningRound';

export default ChatWarningRound;
export { ChatWarningRound };
