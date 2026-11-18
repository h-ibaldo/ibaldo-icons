import { createElement, forwardRef } from 'react';

const ChatAlertRound = forwardRef(function ChatAlertRound(
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
    createElement('path', {"d":"M12.023 15.02L12.023 15.02","key":"1"}),
    createElement('path', {"d":"M12.023 12.02L12.023 9.02","key":"2"})
  );
});

ChatAlertRound.displayName = 'ChatAlertRound';

export default ChatAlertRound;
export { ChatAlertRound };
