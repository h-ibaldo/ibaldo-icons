import { createElement, forwardRef } from 'react';

const ChatUnderlineWide = forwardRef(function ChatUnderlineWide(
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
    createElement('path', {"d":"M16 2L8 2C4.688 2 2 4.688 2 8C2 10.973 4.164 13.434 7 13.91L7 18L11.445 14L16 14C19.313 14 22 11.313 22 8C22 4.688 19.313 2 16 2Z","key":"0"}),
    createElement('path', {"d":"M19 22L5 22","key":"1"})
  );
});

ChatUnderlineWide.displayName = 'ChatUnderlineWide';

export default ChatUnderlineWide;
export { ChatUnderlineWide };
