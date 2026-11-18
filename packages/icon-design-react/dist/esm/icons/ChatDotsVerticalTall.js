import { createElement, forwardRef } from 'react';

const ChatDotsVerticalTall = forwardRef(function ChatDotsVerticalTall(
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
    createElement('path', {"d":"M22 2L22 2","key":"0"}),
    createElement('path', {"d":"M22 6L22 6","key":"1"}),
    createElement('path', {"d":"M22 10L22 10","key":"2"}),
    createElement('path', {"d":"M17 3.762C15.629 2.66 13.895 2 12 2C7.582 2 4 5.582 4 10C4 14.418 7.582 18 12 18L12 22C15.465 20.613 17.797 17.988 19.012 15","key":"3"})
  );
});

ChatDotsVerticalTall.displayName = 'ChatDotsVerticalTall';

export default ChatDotsVerticalTall;
export { ChatDotsVerticalTall };
