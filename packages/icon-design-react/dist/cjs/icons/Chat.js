'use strict';

const { createElement, forwardRef } = require('react');

const Chat = forwardRef(function Chat(
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
    createElement('path', {"d":"M12 2C6.477 2 2 5.582 2 10C2 12.84 3.855 15.328 6.645 16.75C6.664 17.895 6.391 19.078 5.719 20.113C5.48 20.48 5.766 20.973 6.195 20.898C8.313 20.535 9.781 19.23 10.715 17.926C11.137 17.969 11.563 18 12 18C17.523 18 22 14.418 22 10C22 5.582 17.523 2 12 2Z","key":"0"})
  );
});

Chat.displayName = 'Chat';

module.exports = Chat;
module.exports.Chat = Chat;
module.exports.default = Chat;
