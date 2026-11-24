import { createElement, forwardRef } from 'react';

const ChatStackHeart = forwardRef(function ChatStackHeart(
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
    createElement('path', {"d":"M16 9C16 5.688 12.867 3 9 3C5.133 3 2 5.688 2 9C2 10.914 3.051 12.617 4.684 13.719C4.309 15.242 3.656 16.344 3 17C5.617 17 7.789 16.141 9.27 14.988C13.012 14.863 16 12.234 16 9Z","key":"0"}),
    createElement('path', {"d":"M8.613 15.445C9.672 17.469 12 18.898 14.73 18.988C16.211 20.141 18.383 21 21 21C20.34 20.34 19.691 19.242 19.316 17.715C20.949 16.617 22 14.918 22 13C22 9.859 19.188 7.289 15.605 7.027","key":"1"}),
    createElement('path', {"d":"M8.422 11.762L6.148 9.484C5.473 8.813 5.473 7.715 6.148 7.043L6.148 7.039C6.824 6.367 7.918 6.367 8.594 7.039L9 7.449L9.406 7.039C10.082 6.367 11.176 6.367 11.852 7.039L11.852 7.043C12.527 7.715 12.527 8.813 11.852 9.484L9.574 11.762C9.258 12.078 8.742 12.078 8.422 11.762Z","key":"2"})
  );
});

ChatStackHeart.displayName = 'ChatStackHeart';

export default ChatStackHeart;
export { ChatStackHeart };
