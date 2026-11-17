import { createElement, forwardRef } from 'react';

const ChatHeartBroken = forwardRef(function ChatHeartBroken(
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
    createElement('path', {"d":"M12 22L15 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18","key":"0"}),
    createElement('path', {"d":"M11.293 13.414L8.5 10.621C7.672 9.793 7.672 8.449 8.5 7.621C9.328 6.793 10.672 6.793 11.5 7.621L12 8.121L12.5 7.621C13.328 6.793 14.672 6.793 15.5 7.621C16.328 8.449 16.328 9.793 15.5 10.621L12.707 13.414C12.316 13.805 11.684 13.805 11.293 13.414Z","key":"1"})
  );
});

ChatHeartBroken.displayName = 'ChatHeartBroken';

export default ChatHeartBroken;
export { ChatHeartBroken };
