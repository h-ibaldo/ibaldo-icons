'use strict';

const { createElement, forwardRef } = require('react');

const UserChat = forwardRef(function UserChat(
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
    createElement('path', {"d":"M15 15C15 16.656 13.656 18 12 18C10.344 18 9 16.656 9 15C9 13.344 10.344 12 12 12C13.656 12 15 13.344 15 15Z","key":"0"}),
    createElement('path', {"d":"M17 22L17 21C17 19.344 15.656 18 14 18L10 18C8.344 18 7 19.344 7 21L7 22","key":"1"}),
    createElement('path', {"d":"M10 9L3 9C2.445 9 2 8.555 2 8L2 4C2 3.445 2.445 3 3 3L7 3C7.555 3 8 3.445 8 4L8 7Z","key":"2"}),
    createElement('path', {"d":"M14 8L21 8C21.555 8 22 7.555 22 7L22 3C22 2.445 21.555 2 21 2L17 2C16.445 2 16 2.445 16 3L16 6Z","key":"3"})
  );
});

UserChat.displayName = 'UserChat';

module.exports = UserChat;
module.exports.UserChat = UserChat;
module.exports.default = UserChat;
