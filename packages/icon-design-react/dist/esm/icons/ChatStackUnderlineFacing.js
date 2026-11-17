import { createElement, forwardRef } from 'react';

const ChatStackUnderlineFacing = forwardRef(function ChatStackUnderlineFacing(
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
    createElement('path', {"d":"M22 22L13 22","key":"0"}),
    createElement('path', {"d":"M2 4L2 14L7 10L16 10C17.105 10 18 9.105 18 8L18 4C18 2.895 17.105 2 16 2L4 2C2.895 2 2 2.895 2 4Z","key":"1"}),
    createElement('path', {"d":"M8 13C8 14.105 8.895 15 10 15L17 15L22 18L22 9.414C22 8.508 21.641 7.641 21 7","key":"2"})
  );
});

ChatStackUnderlineFacing.displayName = 'ChatStackUnderlineFacing';

export default ChatStackUnderlineFacing;
export { ChatStackUnderlineFacing };
