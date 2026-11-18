import { createElement, forwardRef } from 'react';

const ChatStarSharp = forwardRef(function ChatStarSharp(
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
    createElement('path', {"d":"M12.426 6.766L13.785 9.52L16.824 9.961C17.215 10.02 17.371 10.496 17.09 10.77L14.891 12.914L15.406 15.945C15.477 16.332 15.066 16.629 14.719 16.445L12 15.016L9.281 16.445C8.934 16.629 8.527 16.332 8.594 15.945L9.113 12.914L6.91 10.77C6.629 10.496 6.785 10.02 7.172 9.961L10.215 9.52L11.574 6.766C11.75 6.41 12.25 6.41 12.426 6.766Z","key":"0"}),
    createElement('path', {"d":"M12 2C6.477 2 2 6.477 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z","key":"1"})
  );
});

ChatStarSharp.displayName = 'ChatStarSharp';

export default ChatStarSharp;
export { ChatStarSharp };
