'use strict';

const { createElement, forwardRef } = require('react');

const ChatMinusCircleSharp = forwardRef(function ChatMinusCircleSharp(
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
    createElement('path', {"d":"M22 7C22 9.762 19.762 12 17 12C14.238 12 12 9.762 12 7C12 4.238 14.238 2 17 2C19.762 2 22 4.238 22 7Z","key":"0"}),
    createElement('path', {"d":"M15 7L19 7","key":"1"}),
    createElement('path', {"d":"M10 2.203C5.438 3.133 2 7.16 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C16.84 22 20.867 18.563 21.797 14","key":"2"})
  );
});

ChatMinusCircleSharp.displayName = 'ChatMinusCircleSharp';

module.exports = ChatMinusCircleSharp;
module.exports.ChatMinusCircleSharp = ChatMinusCircleSharp;
module.exports.default = ChatMinusCircleSharp;
