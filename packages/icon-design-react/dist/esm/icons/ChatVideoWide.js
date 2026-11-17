import { createElement, forwardRef } from 'react';

const ChatVideoWide = forwardRef(function ChatVideoWide(
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
    createElement('path', {"d":"M18 4L18 3.152C18 2.516 17.484 2 16.844 2L11.156 2C10.516 2 10 2.516 10 3.152L10 8.848C10 9.484 10.516 10 11.156 10L16.844 10C17.484 10 18 9.484 18 8.848L18 8L21.277 9.641C21.609 9.805 22 9.563 22 9.191L22 2.809C22 2.438 21.609 2.195 21.277 2.359Z","key":"0"}),
    createElement('path', {"d":"M6 3.684C3.637 4.805 2 7.207 2 10C2 13.172 4.109 15.844 7 16.707L7 21L11.57 17L15 17C17.379 17 19.477 15.813 20.738 14","key":"1"})
  );
});

ChatVideoWide.displayName = 'ChatVideoWide';

export default ChatVideoWide;
export { ChatVideoWide };
