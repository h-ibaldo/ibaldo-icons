import { createElement, forwardRef } from 'react';

const ChatOffTooltip = forwardRef(function ChatOffTooltip(
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
    createElement('path', {"d":"M22 16L22 7C22 5.344 20.656 4 19 4L11 4","key":"1"}),
    createElement('path', {"d":"M4.902 4.012C3.293 4.063 2 5.375 2 7L2 15C2 16.656 3.344 18 5 18L8 18L12 22L16 18L18.156 18","key":"2"})
  );
});

ChatOffTooltip.displayName = 'ChatOffTooltip';

export default ChatOffTooltip;
export { ChatOffTooltip };
