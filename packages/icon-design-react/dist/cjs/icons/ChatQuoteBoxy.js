'use strict';

const { createElement, forwardRef } = require('react');

const ChatQuoteBoxy = forwardRef(function ChatQuoteBoxy(
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
    createElement('path', {"d":"M2 5L2 22L7 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z","key":"0"}),
    createElement('path', {"d":"M14 7L17 7L17 9L14 9Z","key":"1"}),
    createElement('path', {"d":"M14 13C15.723 12.539 17 10.93 17 9","key":"2"}),
    createElement('path', {"d":"M7 7L10 7L10 9L7 9Z","key":"3"}),
    createElement('path', {"d":"M7 13C8.723 12.539 10 10.93 10 9","key":"4"})
  );
});

ChatQuoteBoxy.displayName = 'ChatQuoteBoxy';

module.exports = ChatQuoteBoxy;
module.exports.ChatQuoteBoxy = ChatQuoteBoxy;
module.exports.default = ChatQuoteBoxy;
