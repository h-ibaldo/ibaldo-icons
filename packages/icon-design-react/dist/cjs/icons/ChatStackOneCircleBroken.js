'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackOneCircleBroken = forwardRef(function ChatStackOneCircleBroken(
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
    createElement('path', {"d":"M9 2L5 2C3.344 2 2 3.344 2 5L2 13","key":"0"}),
    createElement('path', {"d":"M14 22L17 18L19 18C20.656 18 22 16.656 22 15","key":"1"}),
    createElement('path', {"d":"M22 7.5C22 10.535 19.535 13 16.5 13C13.465 13 11 10.535 11 7.5C11 4.465 13.465 2 16.5 2C19.535 2 22 4.465 22 7.5Z","key":"2"}),
    createElement('path', {"d":"M17 9L17 6L16 6","key":"3"}),
    createElement('path', {"d":"M7 6.785C6.391 7.332 6 8.117 6 9L6 15C6 16.656 7.344 18 9 18L11 18","key":"4"})
  );
});

ChatStackOneCircleBroken.displayName = 'ChatStackOneCircleBroken';

module.exports = ChatStackOneCircleBroken;
module.exports.ChatStackOneCircleBroken = ChatStackOneCircleBroken;
module.exports.default = ChatStackOneCircleBroken;
