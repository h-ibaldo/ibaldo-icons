import { createElement, forwardRef } from 'react';

const ChatUnderlineTypingSlant = forwardRef(function ChatUnderlineTypingSlant(
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
    createElement('path', {"d":"M2 5L2 11C2 12.656 3.344 14 5 14L8 14L8 18L14 14L19 14C20.656 14 22 12.656 22 11L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z","key":"0"}),
    createElement('path', {"d":"M19 22L5 22","key":"1"}),
    createElement('path', {"d":"M8 8L8 8","key":"2"}),
    createElement('path', {"d":"M12 8L12 8","key":"3"}),
    createElement('path', {"d":"M16 8L16 8","key":"4"})
  );
});

ChatUnderlineTypingSlant.displayName = 'ChatUnderlineTypingSlant';

export default ChatUnderlineTypingSlant;
export { ChatUnderlineTypingSlant };
