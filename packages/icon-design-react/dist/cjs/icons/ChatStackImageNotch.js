'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackImageNotch = forwardRef(function ChatStackImageNotch(
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
    createElement('path', {"d":"M2 4L2 12C2 13.105 2.895 14 4 14L5 14L5 18L10 14L16 14C17.105 14 18 13.105 18 12L18 4C18 2.895 17.105 2 16 2L4 2C2.895 2 2 2.895 2 4Z","key":"0"}),
    createElement('path', {"d":"M22 8L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L12 18","key":"1"}),
    createElement('path', {"d":"M5 9L7 7L11 11","key":"2"}),
    createElement('path', {"d":"M11 11L13 9L15 11","key":"3"}),
    createElement('path', {"d":"M11.5 6C11.223 6 11 5.777 11 5.5C11 5.223 11.223 5 11.5 5C11.777 5 12 5.223 12 5.5C12 5.777 11.777 6 11.5 6Z","key":"4"})
  );
});

ChatStackImageNotch.displayName = 'ChatStackImageNotch';

module.exports = ChatStackImageNotch;
module.exports.ChatStackImageNotch = ChatStackImageNotch;
module.exports.default = ChatStackImageNotch;
