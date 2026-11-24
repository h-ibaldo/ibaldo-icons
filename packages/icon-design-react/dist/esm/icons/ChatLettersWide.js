import { createElement, forwardRef } from 'react';

const ChatLettersWide = forwardRef(function ChatLettersWide(
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
    createElement('path', {"d":"M14 13.5C13.172 13.5 12.5 12.828 12.5 12L12.5 9C12.5 8.172 13.172 7.5 14 7.5C14.828 7.5 15.5 8.172 15.5 9L15.5 12C15.5 12.828 14.828 13.5 14 13.5Z","key":"0"}),
    createElement('path', {"d":"M6.5 13.5L7.5 13.5C8.328 13.5 9 12.828 9 12C9 11.172 8.328 10.5 7.5 10.5C6.672 10.5 6 9.828 6 9C6 8.172 6.672 7.5 7.5 7.5L8.5 7.5","key":"1"}),
    createElement('path', {"d":"M19.5 13.5L20.5 13.5C21.328 13.5 22 12.828 22 12C22 11.172 21.328 10.5 20.5 10.5C19.672 10.5 19 9.828 19 9C19 8.172 19.672 7.5 20.5 7.5L21.5 7.5","key":"2"}),
    createElement('path', {"d":"M18 3.875C16.953 3.316 15.766 3 14.5 3L9.5 3C5.355 3 2 6.355 2 10.5C2 13.766 4.09 16.531 7 17.563L7 22L11.668 18L14.5 18C15.766 18 16.953 17.684 18 17.125","key":"3"})
  );
});

ChatLettersWide.displayName = 'ChatLettersWide';

export default ChatLettersWide;
export { ChatLettersWide };
