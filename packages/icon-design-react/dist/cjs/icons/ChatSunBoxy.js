'use strict';

const { createElement, forwardRef } = require('react');

const ChatSunBoxy = forwardRef(function ChatSunBoxy(
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
    createElement('path', {"d":"M9.805 2L4.805 2C3.148 2 1.805 3.344 1.805 5L1.805 22L6.805 18L18.805 18C20.461 18 21.805 16.656 21.805 15","key":"0"}),
    createElement('path', {"d":"M16.805 12C14.594 12 12.805 10.211 12.805 8C12.805 5.789 14.594 4 16.805 4C19.012 4 20.805 5.789 20.805 8C20.805 10.211 19.012 12 16.805 12Z","key":"1"}),
    createElement('path', {"d":"M16.805 2L16.805 4","key":"2"}),
    createElement('path', {"d":"M16.805 12L16.805 14","key":"3"}),
    createElement('path', {"d":"M22 5L20.27 6","key":"4"}),
    createElement('path', {"d":"M13.34 10L11.609 11","key":"5"}),
    createElement('path', {"d":"M22 11L20.27 10","key":"6"}),
    createElement('path', {"d":"M13.34 6L11.609 5","key":"7"})
  );
});

ChatSunBoxy.displayName = 'ChatSunBoxy';

module.exports = ChatSunBoxy;
module.exports.ChatSunBoxy = ChatSunBoxy;
module.exports.default = ChatSunBoxy;
