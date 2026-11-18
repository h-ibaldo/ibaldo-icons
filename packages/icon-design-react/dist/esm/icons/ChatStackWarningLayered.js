import { createElement, forwardRef } from 'react';

const ChatStackWarningLayered = forwardRef(function ChatStackWarningLayered(
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
    createElement('path', {"d":"M5 6L5 5C5 3.344 6.344 2 8 2L19 2C20.656 2 22 3.344 22 5L22 13","key":"0"}),
    createElement('path', {"d":"M13.77 12.004L9.902 18.699C9.059 20.168 10.117 22 11.809 22L19.191 22C20.883 22 21.941 20.168 21.098 18.699L17.234 12.004C16.461 10.668 14.539 10.668 13.77 12.004Z","key":"1"}),
    createElement('path', {"d":"M15.5 16L15.5 15","key":"2"}),
    createElement('path', {"d":"M15.5 19L15.5 19","key":"3"}),
    createElement('path', {"d":"M17.816 8C17.402 6.84 16.305 6 15 6L5 6C3.344 6 2 7.344 2 9L2 22L6 19","key":"4"})
  );
});

ChatStackWarningLayered.displayName = 'ChatStackWarningLayered';

export default ChatStackWarningLayered;
export { ChatStackWarningLayered };
