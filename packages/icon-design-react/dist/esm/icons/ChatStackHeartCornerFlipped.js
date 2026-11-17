import { createElement, forwardRef } from 'react';

const ChatStackHeartCornerFlipped = forwardRef(function ChatStackHeartCornerFlipped(
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
    createElement('path', {"d":"M22 12L22 17C22 18.105 21.105 19 20 19L19 19L19 22L14 19L7 19","key":"0"}),
    createElement('path', {"d":"M16.793 9.414L14 6.621C13.172 5.793 13.172 4.449 14 3.621C14.828 2.793 16.172 2.793 17 3.621L17.5 4.121L18 3.621C18.828 2.793 20.172 2.793 21 3.621C21.828 4.449 21.828 5.793 21 6.621L18.207 9.414C17.816 9.805 17.184 9.805 16.793 9.414Z","key":"1"}),
    createElement('path', {"d":"M9 4.402L5 2L5 5L4 5C2.895 5 2 5.895 2 7L2 13C2 14.105 2.895 15 4 15L15.758 15C16.555 15 17.316 14.684 17.879 14.121L18 14","key":"2"})
  );
});

ChatStackHeartCornerFlipped.displayName = 'ChatStackHeartCornerFlipped';

export default ChatStackHeartCornerFlipped;
export { ChatStackHeartCornerFlipped };
