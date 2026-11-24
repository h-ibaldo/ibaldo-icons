import { createElement, forwardRef } from 'react';

const ChatStackSettings = forwardRef(function ChatStackSettings(
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
    createElement('path', {"d":"M10.098 3L4.902 3L2.305 7.5L4.902 12L10.098 12L12.695 7.5Z","key":"0"}),
    createElement('path', {"d":"M8.5 7.5C8.5 6.945 8.051 6.5 7.5 6.5C6.949 6.5 6.5 6.945 6.5 7.5C6.5 8.055 6.949 8.5 7.5 8.5C8.051 8.5 8.5 8.055 8.5 7.5Z","key":"1"}),
    createElement('path', {"d":"M8.613 15.445C9.672 17.469 12 18.898 14.73 18.988C16.211 20.141 18.383 21 21 21C20.34 20.34 19.691 19.242 19.316 17.715C20.949 16.617 22 14.918 22 13C22 9.977 19.391 7.488 16 7.07","key":"2"})
  );
});

ChatStackSettings.displayName = 'ChatStackSettings';

export default ChatStackSettings;
export { ChatStackSettings };
