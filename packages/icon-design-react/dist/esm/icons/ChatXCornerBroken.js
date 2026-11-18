import { createElement, forwardRef } from 'react';

const ChatXCornerBroken = forwardRef(function ChatXCornerBroken(
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
    createElement('path', {"d":"M18 6L22 2","key":"0"}),
    createElement('path', {"d":"M22 6L18 2","key":"1"}),
    createElement('path', {"d":"M13 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18","key":"2"}),
    createElement('path', {"d":"M22 11L22 15C22 16.656 20.656 18 19 18L15 18L12 22","key":"3"})
  );
});

ChatXCornerBroken.displayName = 'ChatXCornerBroken';

export default ChatXCornerBroken;
export { ChatXCornerBroken };
