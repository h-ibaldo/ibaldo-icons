import { createElement, forwardRef } from 'react';

const ChatStackHeartCornerSlant = forwardRef(function ChatStackHeartCornerSlant(
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
    createElement('path', {"d":"M2 10L2 15C2 16.656 3.344 18 5 18L7 18L7 22L13 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.344 16.656 6 15 6","key":"0"}),
    createElement('path', {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L15 2","key":"1"}),
    createElement('path', {"d":"M6.297 9.574L2.68 5.953C1.773 5.047 1.773 3.582 2.68 2.68L2.68 2.676C3.461 1.898 4.68 1.777 5.598 2.387L7 3.324L8.402 2.387C9.32 1.777 10.539 1.898 11.32 2.676L11.32 2.68C12.227 3.582 12.227 5.047 11.32 5.953L7.703 9.574C7.316 9.961 6.688 9.961 6.297 9.574Z","key":"2"})
  );
});

ChatStackHeartCornerSlant.displayName = 'ChatStackHeartCornerSlant';

export default ChatStackHeartCornerSlant;
export { ChatStackHeartCornerSlant };
