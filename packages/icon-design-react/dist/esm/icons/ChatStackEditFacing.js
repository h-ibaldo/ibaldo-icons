import { createElement, forwardRef } from 'react';

const ChatStackEditFacing = forwardRef(function ChatStackEditFacing(
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
    createElement('path', {"d":"M14 2L4 2C2.895 2 2 2.895 2 5L2 19L7 15L15.586 15C16.492 15 17.359 14.641 18 14","key":"0"}),
    createElement('path', {"d":"M8 18C8 19.105 8.895 20 10 20L17 20L22 22L22 10.414","key":"1"}),
    createElement('path', {"d":"M19.707 2.707L21.293 4.293C21.684 4.684 21.684 5.316 21.293 5.707L16 11L13 11L13 8L18.293 2.707C18.684 2.316 19.316 2.316 19.707 2.707Z","key":"2"})
  );
});

ChatStackEditFacing.displayName = 'ChatStackEditFacing';

export default ChatStackEditFacing;
export { ChatStackEditFacing };
