'use strict';

const { createElement, forwardRef } = require('react');

const ChatXCorner = forwardRef(function ChatXCorner(
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
    createElement('path', {"d":"M18 7L22 3","key":"0"}),
    createElement('path', {"d":"M22 7L18 3","key":"1"}),
    createElement('path', {"d":"M13 3.039C12.672 3.016 12.336 3 12 3C6.477 3 2 6.582 2 11C2 13.84 3.855 16.328 6.645 17.75C6.664 18.895 6.391 20.078 5.719 21.113C5.48 21.48 5.766 21.973 6.195 21.898C8.313 21.535 9.781 20.23 10.715 18.926C11.137 18.969 11.563 19 12 19C17.098 19 21.297 15.945 21.914 12","key":"2"})
  );
});

ChatXCorner.displayName = 'ChatXCorner';

module.exports = ChatXCorner;
module.exports.ChatXCorner = ChatXCorner;
module.exports.default = ChatXCorner;
