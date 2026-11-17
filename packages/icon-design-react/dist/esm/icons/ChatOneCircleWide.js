import { createElement, forwardRef } from 'react';

const ChatOneCircleWide = forwardRef(function ChatOneCircleWide(
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
    createElement('path', {"d":"M22 7.5C22 10.535 19.535 13 16.5 13C13.465 13 11 10.535 11 7.5C11 4.465 13.465 2 16.5 2C19.535 2 22 4.465 22 7.5Z","key":"0"}),
    createElement('path', {"d":"M13.344 3L9 3C5.133 3 2 6.133 2 10C2 13.172 4.109 15.848 7 16.707L7 21L11.57 17L15 17C18.867 17 22 13.867 22 10C22 9.547 21.953 9.105 21.871 8.676","key":"1"}),
    createElement('path', {"d":"M17 9L17 6L16 6","key":"2"})
  );
});

ChatOneCircleWide.displayName = 'ChatOneCircleWide';

export default ChatOneCircleWide;
export { ChatOneCircleWide };
