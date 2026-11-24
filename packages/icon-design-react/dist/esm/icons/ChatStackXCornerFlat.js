import { createElement, forwardRef } from 'react';

const ChatStackXCornerFlat = forwardRef(function ChatStackXCornerFlat(
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
    createElement('path', {"d":"M22 22L6 22C4.895 22 4 21.105 4 20L4 16C4 14.895 4.895 14 6 14L18 14C19.105 14 20 14.895 20 16L20 19Z","key":"0"}),
    createElement('path', {"d":"M18 6L22 2","key":"1"}),
    createElement('path', {"d":"M22 6L18 2","key":"2"}),
    createElement('path', {"d":"M14 2L6 2C4.895 2 4 2.895 4 4L4 7L2 10L18 10C18.738 10 19.375 9.598 19.723 9","key":"3"})
  );
});

ChatStackXCornerFlat.displayName = 'ChatStackXCornerFlat';

export default ChatStackXCornerFlat;
export { ChatStackXCornerFlat };
