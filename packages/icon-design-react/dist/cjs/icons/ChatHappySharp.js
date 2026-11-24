'use strict';

const { createElement, forwardRef } = require('react');

const ChatHappySharp = forwardRef(function ChatHappySharp(
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
    createElement('path', {"d":"M12 2C6.477 2 2 6.477 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z","key":"0"}),
    createElement('path', {"d":"M10 9L10 10","key":"1"}),
    createElement('path', {"d":"M14 9L14 10","key":"2"}),
    createElement('path', {"d":"M7 12.652C8.191 14.086 9.988 15 12 15C14.012 15 15.809 14.086 17 12.652","key":"3"})
  );
});

ChatHappySharp.displayName = 'ChatHappySharp';

module.exports = ChatHappySharp;
module.exports.ChatHappySharp = ChatHappySharp;
module.exports.default = ChatHappySharp;
