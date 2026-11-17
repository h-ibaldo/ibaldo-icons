'use strict';

const { createElement, forwardRef } = require('react');

const ChatPlusTall = forwardRef(function ChatPlusTall(
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
    createElement('path', {"d":"M12 7L12 13","key":"0"}),
    createElement('path', {"d":"M15 10L9 10","key":"1"}),
    createElement('path', {"d":"M12 22C17.332 19.867 20 14.801 20 10C20 5.582 16.418 2 12 2C7.582 2 4 5.582 4 10C4 14.418 7.582 18 12 18Z","key":"2"})
  );
});

ChatPlusTall.displayName = 'ChatPlusTall';

module.exports = ChatPlusTall;
module.exports.ChatPlusTall = ChatPlusTall;
module.exports.default = ChatPlusTall;
