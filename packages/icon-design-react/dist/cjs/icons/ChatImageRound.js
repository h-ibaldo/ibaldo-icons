'use strict';

const { createElement, forwardRef } = require('react');

const ChatImageRound = forwardRef(function ChatImageRound(
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
    createElement('path', {"d":"M12 2C6.477 2 2 6.477 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z","key":"0"}),
    createElement('path', {"d":"M6 15L10 11L14 15","key":"1"}),
    createElement('path', {"d":"M14 15L16 13L18 15","key":"2"}),
    createElement('path', {"d":"M15.5 9C15.223 9 15 8.777 15 8.5C15 8.223 15.223 8 15.5 8C15.777 8 16 8.223 16 8.5C16 8.777 15.777 9 15.5 9Z","key":"3"})
  );
});

ChatImageRound.displayName = 'ChatImageRound';

module.exports = ChatImageRound;
module.exports.ChatImageRound = ChatImageRound;
module.exports.default = ChatImageRound;
