import { createElement, forwardRef } from 'react';

const ChatPlusCornerBroken = forwardRef(function ChatPlusCornerBroken(
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
    createElement('path', {"d":"M19 2L19 8","key":"0"}),
    createElement('path', {"d":"M22 5L16 5","key":"1"}),
    createElement('path', {"d":"M12 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18","key":"2"}),
    createElement('path', {"d":"M22 12L22 15C22 16.656 20.656 18 19 18L15 18L12 22","key":"3"})
  );
});

ChatPlusCornerBroken.displayName = 'ChatPlusCornerBroken';

export default ChatPlusCornerBroken;
export { ChatPlusCornerBroken };
