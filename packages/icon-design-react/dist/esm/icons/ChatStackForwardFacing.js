import { createElement, forwardRef } from 'react';

const ChatStackForwardFacing = forwardRef(function ChatStackForwardFacing(
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
    createElement('path', {"d":"M2 4L2 18L7 14L16 14C17.105 14 18 13.105 18 12L18 4C18 2.895 17.105 2 16 2L4 2C2.895 2 2 2.895 2 4Z","key":"0"}),
    createElement('path', {"d":"M8 17C8 18.105 8.895 19 10 19L17 19L22 22L22 10.414C22 9.508 21.641 8.641 21 8","key":"1"}),
    createElement('path', {"d":"M7 8L13 8","key":"2"}),
    createElement('path', {"d":"M11 6L13 8L11 10","key":"3"})
  );
});

ChatStackForwardFacing.displayName = 'ChatStackForwardFacing';

export default ChatStackForwardFacing;
export { ChatStackForwardFacing };
