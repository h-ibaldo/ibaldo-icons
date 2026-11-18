import { createElement, forwardRef } from 'react';

const ChatRaysFlat = forwardRef(function ChatRaysFlat(
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
    createElement('path', {"d":"M13 2L13 4","key":"0"}),
    createElement('path', {"d":"M5 2L7 4","key":"1"}),
    createElement('path', {"d":"M21 2L19 4","key":"2"}),
    createElement('path', {"d":"M13 22L13 20","key":"3"}),
    createElement('path', {"d":"M21 22L19 20","key":"4"}),
    createElement('path', {"d":"M5 22L7 20","key":"5"}),
    createElement('path', {"d":"M20 16C21.105 16 22 15.105 22 14L22 10C22 8.895 21.105 8 20 8L7 8C5.895 8 5 8.895 5 10L5 12L2 16Z","key":"6"})
  );
});

ChatRaysFlat.displayName = 'ChatRaysFlat';

export default ChatRaysFlat;
export { ChatRaysFlat };
