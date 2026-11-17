import { createElement, forwardRef } from 'react';

const ChatStackOneCircleFacing = forwardRef(function ChatStackOneCircleFacing(
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
    createElement('path', {"d":"M9 2L4 2C2.895 2 2 2.895 2 5L2 19L7 15L11 15","key":"0"}),
    createElement('path', {"d":"M8 18C8 19.105 8.895 20 10 20L17 20L22 22L22 15","key":"1"}),
    createElement('path', {"d":"M22 7.5C22 10.535 19.535 13 16.5 13C13.465 13 11 10.535 11 7.5C11 4.465 13.465 2 16.5 2C19.535 2 22 4.465 22 7.5Z","key":"2"}),
    createElement('path', {"d":"M17 9L17 6L16 6","key":"3"})
  );
});

ChatStackOneCircleFacing.displayName = 'ChatStackOneCircleFacing';

export default ChatStackOneCircleFacing;
export { ChatStackOneCircleFacing };
