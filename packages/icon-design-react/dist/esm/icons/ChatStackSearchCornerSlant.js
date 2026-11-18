import { createElement, forwardRef } from 'react';

const ChatStackSearchCornerSlant = forwardRef(function ChatStackSearchCornerSlant(
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
    createElement('path', {"d":"M2 12L2 15C2 16.656 3.344 18 5 18L7 18L7 22L13 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.344 16.656 6 15 6L13 6","key":"0"}),
    createElement('path', {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L12 2","key":"1"}),
    createElement('path', {"d":"M9 5.5C9 7.434 7.434 9 5.5 9C3.566 9 2 7.434 2 5.5C2 3.566 3.566 2 5.5 2C7.434 2 9 3.566 9 5.5Z","key":"2"}),
    createElement('path', {"d":"M7.973 7.973L10 10","key":"3"})
  );
});

ChatStackSearchCornerSlant.displayName = 'ChatStackSearchCornerSlant';

export default ChatStackSearchCornerSlant;
export { ChatStackSearchCornerSlant };
