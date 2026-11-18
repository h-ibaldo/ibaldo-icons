import { createElement, forwardRef } from 'react';

const ChatXCircleBroken = forwardRef(function ChatXCircleBroken(
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
    createElement('path', {"d":"M9 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18","key":"0"}),
    createElement('path', {"d":"M22 15C22 16.656 20.656 18 19 18L15 18L12 22","key":"1"}),
    createElement('path', {"d":"M22 7.5C22 10.539 19.539 13 16.5 13C13.461 13 11 10.539 11 7.5C11 4.461 13.461 2 16.5 2C19.539 2 22 4.461 22 7.5Z","key":"2"}),
    createElement('path', {"d":"M14.75 9.25L18.25 5.75","key":"3"}),
    createElement('path', {"d":"M18.25 9.25L14.75 5.75","key":"4"})
  );
});

ChatXCircleBroken.displayName = 'ChatXCircleBroken';

export default ChatXCircleBroken;
export { ChatXCircleBroken };
