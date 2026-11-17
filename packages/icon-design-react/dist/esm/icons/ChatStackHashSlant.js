import { createElement, forwardRef } from 'react';

const ChatStackHashSlant = forwardRef(function ChatStackHashSlant(
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
    createElement('path', {"d":"M2 9L2 16C2 17.656 3.344 19 5 19L7 19L7 22L12 19L15 19C16.656 19 18 17.656 18 16L18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9Z","key":"0"}),
    createElement('path', {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L7 2","key":"1"}),
    createElement('path', {"d":"M9 9L7 16","key":"2"}),
    createElement('path', {"d":"M13 9L11 16","key":"3"}),
    createElement('path', {"d":"M7 11L14 11","key":"4"}),
    createElement('path', {"d":"M6 14L13 14","key":"5"})
  );
});

ChatStackHashSlant.displayName = 'ChatStackHashSlant';

export default ChatStackHashSlant;
export { ChatStackHashSlant };
