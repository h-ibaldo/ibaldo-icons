'use strict';

const { createElement, forwardRef } = require('react');

const ChatMinusCircleWide = forwardRef(function ChatMinusCircleWide(
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
    createElement('path', {"d":"M13.023 4L9 4C5.133 4 2 7.133 2 11C2 14.172 4.109 16.848 7 17.707L7 22L11.57 18L15 18C18.867 18 22 14.867 22 11C22 10.234 21.875 9.504 21.648 8.816","key":"0"}),
    createElement('path', {"d":"M22 7C22 9.762 19.762 12 17 12C14.238 12 12 9.762 12 7C12 4.238 14.238 2 17 2C19.762 2 22 4.238 22 7Z","key":"1"}),
    createElement('path', {"d":"M15 7L19 7","key":"2"})
  );
});

ChatMinusCircleWide.displayName = 'ChatMinusCircleWide';

module.exports = ChatMinusCircleWide;
module.exports.ChatMinusCircleWide = ChatMinusCircleWide;
module.exports.default = ChatMinusCircleWide;
