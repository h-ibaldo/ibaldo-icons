import { createElement, forwardRef } from 'react';

const ChatStackBanCornerFacing = forwardRef(function ChatStackBanCornerFacing(
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
    createElement('path', {"d":"M10 2L4 2C2.895 2 2 2.895 2 4L2 18L7 14L13 14","key":"0"}),
    createElement('path', {"d":"M8 17C8 18.105 8.895 19 10 19L17 19L22 22L22 14","key":"1"}),
    createElement('path', {"d":"M22 7C22 9.762 19.762 12 17 12C14.238 12 12 9.762 12 7C12 4.238 14.238 2 17 2C19.762 2 22 4.238 22 7Z","key":"2"}),
    createElement('path', {"d":"M20.535 3.465L13.465 10.535","key":"3"})
  );
});

ChatStackBanCornerFacing.displayName = 'ChatStackBanCornerFacing';

export default ChatStackBanCornerFacing;
export { ChatStackBanCornerFacing };
