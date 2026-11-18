import { createElement, forwardRef } from 'react';

const ChatOneCircleTooltip = forwardRef(function ChatOneCircleTooltip(
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
    createElement('path', {"d":"M10 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L8 18L12 22L16 18L19 18C20.656 18 22 16.656 22 15L22 14","key":"0"}),
    createElement('path', {"d":"M22 7.5C22 10.539 19.535 13 16.5 13C13.465 13 11 10.539 11 7.5C11 4.461 13.465 2 16.5 2C19.535 2 22 4.461 22 7.5Z","key":"1"}),
    createElement('path', {"d":"M17 9L17 6L16 6","key":"2"})
  );
});

ChatOneCircleTooltip.displayName = 'ChatOneCircleTooltip';

export default ChatOneCircleTooltip;
export { ChatOneCircleTooltip };
