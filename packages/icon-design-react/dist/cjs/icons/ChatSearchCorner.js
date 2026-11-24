'use strict';

const { createElement, forwardRef } = require('react');

const ChatSearchCorner = forwardRef(function ChatSearchCorner(
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
    createElement('path', {"d":"M21 14.5C21 16.434 19.434 18 17.5 18C15.566 18 14 16.434 14 14.5C14 12.566 15.566 11 17.5 11C19.434 11 21 12.566 21 14.5Z","key":"0"}),
    createElement('path', {"d":"M19.973 16.973L22 19","key":"1"}),
    createElement('path', {"d":"M21.672 9C20.563 5.551 16.656 3 12 3C6.477 3 2 6.582 2 11C2 13.84 3.855 16.328 6.645 17.75C6.664 18.895 6.395 20.078 5.719 21.113C5.48 21.48 5.766 21.973 6.195 21.898C8.313 21.535 9.781 20.23 10.715 18.926C11.137 18.969 11.563 19 12 19","key":"2"})
  );
});

ChatSearchCorner.displayName = 'ChatSearchCorner';

module.exports = ChatSearchCorner;
module.exports.ChatSearchCorner = ChatSearchCorner;
module.exports.default = ChatSearchCorner;
