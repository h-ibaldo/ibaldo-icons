'use strict';

const { createElement, forwardRef } = require('react');

const ChatMinusCornerSharp = forwardRef(function ChatMinusCornerSharp(
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
    createElement('path', {"d":"M22 5L16 5","key":"0"}),
    createElement('path', {"d":"M12 2C6.477 2 2 6.477 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C17.523 22 22 17.523 22 12C22 11.316 21.93 10.645 21.801 10","key":"1"})
  );
});

ChatMinusCornerSharp.displayName = 'ChatMinusCornerSharp';

module.exports = ChatMinusCornerSharp;
module.exports.ChatMinusCornerSharp = ChatMinusCornerSharp;
module.exports.default = ChatMinusCornerSharp;
