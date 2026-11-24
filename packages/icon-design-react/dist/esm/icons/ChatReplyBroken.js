import { createElement, forwardRef } from 'react';

const ChatReplyBroken = forwardRef(function ChatReplyBroken(
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
    createElement('path', {"d":"M12 22L15 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18","key":"0"}),
    createElement('path', {"d":"M10.023 11L8.023 9L10.023 7","key":"1"}),
    createElement('path', {"d":"M8.023 9L13 9C14.656 9 16 10.344 16 12L16 13","key":"2"})
  );
});

ChatReplyBroken.displayName = 'ChatReplyBroken';

export default ChatReplyBroken;
export { ChatReplyBroken };
