'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackDotsCircleBoxy = forwardRef(function ChatStackDotsCircleBoxy(
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
    createElement('path', {"d":"M22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17Z","key":"0"}),
    createElement('path', {"d":"M15.5 17L15.5 17","key":"1"}),
    createElement('path', {"d":"M18.5 17L18.5 17","key":"2"}),
    createElement('path', {"d":"M18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9L2 22L7 18L9 18","key":"3"}),
    createElement('path', {"d":"M22 10L22 5C22 3.344 20.656 2 19 2L7 2","key":"4"})
  );
});

ChatStackDotsCircleBoxy.displayName = 'ChatStackDotsCircleBoxy';

module.exports = ChatStackDotsCircleBoxy;
module.exports.ChatStackDotsCircleBoxy = ChatStackDotsCircleBoxy;
module.exports.default = ChatStackDotsCircleBoxy;
