import { createElement, forwardRef } from 'react';

const ChatCheckDoubleCornerRound = forwardRef(function ChatCheckDoubleCornerRound(
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
    createElement('path', {"d":"M12 4L13.5 6L18 2","key":"0"}),
    createElement('path', {"d":"M16.801 7.066L17.5 8L22 4","key":"1"}),
    createElement('path', {"d":"M8 2.84C4.469 4.383 2 7.898 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C17.523 22 22 17.523 22 12C22 11.316 21.93 10.648 21.801 10","key":"2"})
  );
});

ChatCheckDoubleCornerRound.displayName = 'ChatCheckDoubleCornerRound';

export default ChatCheckDoubleCornerRound;
export { ChatCheckDoubleCornerRound };
