'use strict';

const { createElement, forwardRef } = require('react');

const ChatOneCircleSharp = forwardRef(function ChatOneCircleSharp(
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
    createElement('path', {"d":"M22 7.5C22 10.539 19.535 13 16.5 13C13.465 13 11 10.539 11 7.5C11 4.461 13.465 2 16.5 2C19.535 2 22 4.461 22 7.5Z","key":"0"}),
    createElement('path', {"d":"M17 9L17 6L16 6","key":"1"}),
    createElement('path', {"d":"M8 2.84C4.469 4.383 2 7.898 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C16.102 22 19.617 19.531 21.16 16","key":"2"})
  );
});

ChatOneCircleSharp.displayName = 'ChatOneCircleSharp';

module.exports = ChatOneCircleSharp;
module.exports.ChatOneCircleSharp = ChatOneCircleSharp;
module.exports.default = ChatOneCircleSharp;
