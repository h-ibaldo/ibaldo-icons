'use strict';

const { createElement, forwardRef } = require('react');

const ChatLockCorner = forwardRef(function ChatLockCorner(
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
    createElement('path', {"d":"M22 13L14 13L14 8L22 8Z","key":"0"}),
    createElement('path', {"d":"M15 8L15 6C15 4.344 16.344 3 18 3C19.656 3 21 4.344 21 6L21 8","key":"1"}),
    createElement('path', {"d":"M11 3.039C5.945 3.441 2 6.852 2 11C2 13.84 3.855 16.328 6.645 17.75C6.664 18.895 6.391 20.078 5.719 21.113C5.48 21.48 5.766 21.973 6.195 21.898C8.313 21.535 9.781 20.23 10.715 18.926C11.137 18.969 11.563 19 12 19C14.531 19 16.836 18.242 18.598 17","key":"2"})
  );
});

ChatLockCorner.displayName = 'ChatLockCorner';

module.exports = ChatLockCorner;
module.exports.ChatLockCorner = ChatLockCorner;
module.exports.default = ChatLockCorner;
