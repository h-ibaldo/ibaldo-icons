'use strict';

const { createElement, forwardRef } = require('react');

const ChatEditWide = forwardRef(function ChatEditWide(
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
    createElement('path', {"d":"M21.414 3.414L21.586 3.586C22.367 4.367 22.367 5.633 21.586 6.414L15 13L12 13L12 10L18.586 3.414C19.367 2.633 20.633 2.633 21.414 3.414Z","key":"0"}),
    createElement('path', {"d":"M17 5L20 8","key":"1"}),
    createElement('path', {"d":"M12 4L9 4C5.133 4 2 7.133 2 11C2 14.172 4.109 16.848 7 17.707L7 22L11.57 18L15 18C18.523 18 21.434 15.391 21.922 12","key":"2"})
  );
});

ChatEditWide.displayName = 'ChatEditWide';

module.exports = ChatEditWide;
module.exports.ChatEditWide = ChatEditWide;
module.exports.default = ChatEditWide;
