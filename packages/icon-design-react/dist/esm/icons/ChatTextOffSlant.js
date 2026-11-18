import { createElement, forwardRef } from 'react';

const ChatTextOffSlant = forwardRef(function ChatTextOffSlant(
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
    createElement('path', {"d":"M5.367 4.5L5 4.5C3.344 4.5 2 5.844 2 7.5L2 15C2 16.656 3.344 18 5 18L8 18L8 22L14 18L18.156 18","key":"1"}),
    createElement('path', {"d":"M21.973 15.25C21.98 15.168 22 15.086 22 15L22 7.5C22 5.844 20.656 4.5 19 4.5L11.789 4.5","key":"2"}),
    createElement('path', {"d":"M14 9L16 9","key":"3"}),
    createElement('path', {"d":"M8 9L9.633 9","key":"4"}),
    createElement('path', {"d":"M8 13L13.422 13","key":"5"})
  );
});

ChatTextOffSlant.displayName = 'ChatTextOffSlant';

export default ChatTextOffSlant;
export { ChatTextOffSlant };
