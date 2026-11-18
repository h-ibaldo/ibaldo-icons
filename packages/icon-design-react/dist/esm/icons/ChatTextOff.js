import { createElement, forwardRef } from 'react';

const ChatTextOff = forwardRef(function ChatTextOff(
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
    createElement('path', {"d":"M3 2L21 21","key":"0"}),
    createElement('path', {"d":"M5.664 4.813C3.43 6.277 2 8.508 2 11C2 13.84 3.855 16.328 6.645 17.75C6.664 18.895 6.391 20.078 5.719 21.113C5.48 21.48 5.766 21.973 6.195 21.898C8.313 21.535 9.781 20.23 10.715 18.926C11.137 18.969 11.563 19 12 19C14.133 19 16.109 18.461 17.73 17.551","key":"1"}),
    createElement('path', {"d":"M20.867 14.691C21.586 13.586 22 12.332 22 11C22 6.582 17.523 3 12 3C11.297 3 10.613 3.059 9.949 3.168","key":"2"}),
    createElement('path', {"d":"M8 9L9 9","key":"3"}),
    createElement('path', {"d":"M14 9L16 9","key":"4"}),
    createElement('path', {"d":"M8 13L13 13","key":"5"})
  );
});

ChatTextOff.displayName = 'ChatTextOff';

export default ChatTextOff;
export { ChatTextOff };
