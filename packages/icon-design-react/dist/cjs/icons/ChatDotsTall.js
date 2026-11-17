'use strict';

const { createElement, forwardRef } = require('react');

const ChatDotsTall = forwardRef(function ChatDotsTall(
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
    createElement('path', {"d":"M12 22C17.332 19.867 20 14.801 20 10C20 5.582 16.418 2 12 2C7.582 2 4 5.582 4 10C4 14.418 7.582 18 12 18Z","key":"0"}),
    createElement('path', {"d":"M10 10L10 10","key":"1"}),
    createElement('path', {"d":"M14 10L14 10","key":"2"})
  );
});

ChatDotsTall.displayName = 'ChatDotsTall';

module.exports = ChatDotsTall;
module.exports.ChatDotsTall = ChatDotsTall;
module.exports.default = ChatDotsTall;
