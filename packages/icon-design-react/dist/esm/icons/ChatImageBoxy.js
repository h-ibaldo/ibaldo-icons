import { createElement, forwardRef } from 'react';

const ChatImageBoxy = forwardRef(function ChatImageBoxy(
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
    createElement('path', {"d":"M2 5L2 22L7 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z","key":"0"}),
    createElement('path', {"d":"M6 13L10 9L14 13","key":"1"}),
    createElement('path', {"d":"M14 13L16 11L18 13","key":"2"}),
    createElement('path', {"d":"M15.5 7C15.223 7 15 6.777 15 6.5C15 6.223 15.223 6 15.5 6C15.777 6 16 6.223 16 6.5C16 6.777 15.777 7 15.5 7Z","key":"3"})
  );
});

ChatImageBoxy.displayName = 'ChatImageBoxy';

export default ChatImageBoxy;
export { ChatImageBoxy };
