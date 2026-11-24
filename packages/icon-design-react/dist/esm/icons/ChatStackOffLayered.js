import { createElement, forwardRef } from 'react';

const ChatStackOffLayered = forwardRef(function ChatStackOffLayered(
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
    createElement('path', {"d":"M2 2L20 21","key":"0"}),
    createElement('path', {"d":"M16.676 17.488C17.473 16.949 18 16.039 18 15L18 9C18 7.344 16.656 6 15 6L5.789 6","key":"1"}),
    createElement('path', {"d":"M2.086 8.313C2.035 8.535 2 8.762 2 9L2 22L7 18L11.262 18","key":"2"}),
    createElement('path', {"d":"M18 14L19 14C20.656 14 22 12.656 22 11L22 5C22 3.344 20.656 2 19 2L8 2C6.344 2 5 3.344 5 5L5 5.168","key":"3"})
  );
});

ChatStackOffLayered.displayName = 'ChatStackOffLayered';

export default ChatStackOffLayered;
export { ChatStackOffLayered };
