import { createElement, forwardRef } from 'react';

const ChatTextSide = forwardRef(function ChatTextSide(
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
    createElement('path', {"d":"M7 19L20 19C21.105 19 22 18.105 22 17L22 7C22 5.895 21.105 5 20 5L7 5C5.895 5 5 5.895 5 7L5 10L2 12L5 14L5 17C5 18.105 5.895 19 7 19Z","key":"0"}),
    createElement('path', {"d":"M9 10L18 10","key":"1"}),
    createElement('path', {"d":"M9 14L15 14","key":"2"})
  );
});

ChatTextSide.displayName = 'ChatTextSide';

export default ChatTextSide;
export { ChatTextSide };
