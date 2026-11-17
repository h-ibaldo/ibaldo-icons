import { createElement, forwardRef } from 'react';

const ChatCheckDoubleCornerBoxy = forwardRef(function ChatCheckDoubleCornerBoxy(
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
    createElement('path', {"d":"M8 2L5 2C3.344 2 2 3.344 2 5L2 22L7 18L19 18C20.656 18 22 16.656 22 15L22 11","key":"0"}),
    createElement('path', {"d":"M12 4L13.5 6L18 2","key":"1"}),
    createElement('path', {"d":"M16.801 7.066L17.5 8L22 4","key":"2"})
  );
});

ChatCheckDoubleCornerBoxy.displayName = 'ChatCheckDoubleCornerBoxy';

export default ChatCheckDoubleCornerBoxy;
export { ChatCheckDoubleCornerBoxy };
