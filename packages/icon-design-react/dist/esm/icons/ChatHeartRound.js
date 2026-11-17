import { createElement, forwardRef } from 'react';

const ChatHeartRound = forwardRef(function ChatHeartRound(
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
    createElement('path', {"d":"M12 2C6.477 2 2 6.477 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z","key":"0"}),
    createElement('path', {"d":"M13 8.828L12 9.828L11 8.828C9.895 7.723 8.105 7.723 7 8.828C5.895 9.934 5.895 11.723 7 12.828L10.586 16.414C11.367 17.195 12.633 17.195 13.414 16.414L17 12.828C18.105 11.723 18.105 9.934 17 8.828C15.895 7.723 14.105 7.723 13 8.828Z","key":"1"})
  );
});

ChatHeartRound.displayName = 'ChatHeartRound';

export default ChatHeartRound;
export { ChatHeartRound };
