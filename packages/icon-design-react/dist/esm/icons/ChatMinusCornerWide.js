import { createElement, forwardRef } from 'react';

const ChatMinusCornerWide = forwardRef(function ChatMinusCornerWide(
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
    createElement('path', {"d":"M22 5L16 5","key":"0"}),
    createElement('path', {"d":"M11 3L9 3C5.133 3 2 6.133 2 10C2 13.172 4.109 15.848 7 16.707L7 21L11.57 17L15 17C18.867 17 22 13.867 22 10","key":"1"})
  );
});

ChatMinusCornerWide.displayName = 'ChatMinusCornerWide';

export default ChatMinusCornerWide;
export { ChatMinusCornerWide };
