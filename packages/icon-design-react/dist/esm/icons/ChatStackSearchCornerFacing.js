import { createElement, forwardRef } from 'react';

const ChatStackSearchCornerFacing = forwardRef(function ChatStackSearchCornerFacing(
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
    createElement('path', {"d":"M11 2L4 2C2.895 2 2 2.895 2 4L2 18L7 14L15.586 14C16.492 14 17.359 13.641 18 13","key":"0"}),
    createElement('path', {"d":"M8 17C8 18.105 8.895 19 10 19L17 19L22 22L22 14","key":"1"}),
    createElement('path', {"d":"M21 5.5C21 7.434 19.434 9 17.5 9C15.566 9 14 7.434 14 5.5C14 3.566 15.566 2 17.5 2C19.434 2 21 3.566 21 5.5Z","key":"2"}),
    createElement('path', {"d":"M19.973 7.973L22 10","key":"3"})
  );
});

ChatStackSearchCornerFacing.displayName = 'ChatStackSearchCornerFacing';

export default ChatStackSearchCornerFacing;
export { ChatStackSearchCornerFacing };
