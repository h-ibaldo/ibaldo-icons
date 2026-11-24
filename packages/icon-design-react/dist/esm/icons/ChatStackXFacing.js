import { createElement, forwardRef } from 'react';

const ChatStackXFacing = forwardRef(function ChatStackXFacing(
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
    createElement('path', {"d":"M7 10L11 6","key":"0"}),
    createElement('path', {"d":"M11 10L7 6","key":"1"}),
    createElement('path', {"d":"M2 4L2 17L7 14L14 14C15.105 14 16 13.105 16 12L16 4C16 2.895 15.105 2 14 2L4 2C2.895 2 2 2.895 2 4Z","key":"2"}),
    createElement('path', {"d":"M19 8L20 8C21.105 8 22 8.895 22 10L22 22L17 19L10 19C8.895 19 8 18.105 8 17","key":"3"})
  );
});

ChatStackXFacing.displayName = 'ChatStackXFacing';

export default ChatStackXFacing;
export { ChatStackXFacing };
