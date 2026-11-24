'use strict';

const { createElement, forwardRef } = require('react');

const ChatDotWide = forwardRef(function ChatDotWide(
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
    createElement('path', {"d":"M16 5C16 6.656 17.344 8 19 8C20.656 8 22 6.656 22 5C22 3.344 20.656 2 19 2C17.344 2 16 3.344 16 5Z","key":"0"}),
    createElement('path', {"d":"M12 3L9 3C5.133 3 2 6.133 2 10C2 13.172 4.109 15.848 7 16.707L7 21L11.57 17L15 17C18.523 17 21.434 14.391 21.922 11","key":"1"})
  );
});

ChatDotWide.displayName = 'ChatDotWide';

module.exports = ChatDotWide;
module.exports.ChatDotWide = ChatDotWide;
module.exports.default = ChatDotWide;
