'use strict';

const { createElement, forwardRef } = require('react');

const ChatVideoSharp = forwardRef(function ChatVideoSharp(
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
    createElement('path', {"d":"M18 4L18 3.156C18 2.516 17.484 2 16.848 2L11.152 2C10.516 2 10 2.516 10 3.156L10 8.844C10 9.484 10.516 10 11.152 10L16.848 10C17.484 10 18 9.484 18 8.844L18 8L21.277 9.637C21.609 9.805 22 9.563 22 9.191L22 2.809C22 2.438 21.609 2.195 21.277 2.363Z","key":"0"}),
    createElement('path', {"d":"M6 4.016C3.574 5.84 2 8.73 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C16.84 22 20.871 18.566 21.801 14","key":"1"})
  );
});

ChatVideoSharp.displayName = 'ChatVideoSharp';

module.exports = ChatVideoSharp;
module.exports.ChatVideoSharp = ChatVideoSharp;
module.exports.default = ChatVideoSharp;
