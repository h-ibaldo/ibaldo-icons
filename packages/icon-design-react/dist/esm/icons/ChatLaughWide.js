import { createElement, forwardRef } from 'react';

const ChatLaughWide = forwardRef(function ChatLaughWide(
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
    createElement('path', {"d":"M15 3L9 3C5.133 3 2 6.133 2 10C2 13.172 4.109 15.848 7 16.707L7 21L11.57 17L15 17C18.867 17 22 13.867 22 10C22 6.133 18.867 3 15 3Z","key":"0"}),
    createElement('path', {"d":"M9 11L15 11C15 12.656 13.656 14 12 14C10.344 14 9 12.656 9 11Z","key":"1"}),
    createElement('path', {"d":"M14.5 8C14.223 8 14 7.777 14 7.5C14 7.223 14.223 7 14.5 7C14.777 7 15 7.223 15 7.5C15 7.777 14.777 8 14.5 8Z","key":"2"}),
    createElement('path', {"d":"M9.5 8C9.223 8 9 7.777 9 7.5C9 7.223 9.223 7 9.5 7C9.777 7 10 7.223 10 7.5C10 7.777 9.777 8 9.5 8Z","key":"3"})
  );
});

ChatLaughWide.displayName = 'ChatLaughWide';

export default ChatLaughWide;
export { ChatLaughWide };
