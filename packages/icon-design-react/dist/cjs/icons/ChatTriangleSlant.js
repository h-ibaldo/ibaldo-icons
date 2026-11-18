'use strict';

const { createElement, forwardRef } = require('react');

const ChatTriangleSlant = forwardRef(function ChatTriangleSlant(
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
    createElement('path', {"d":"M13.648 11L20.352 11C21.516 11 22.238 9.727 21.637 8.727L18.285 3.145C17.703 2.172 16.297 2.172 15.715 3.145L12.363 8.727C11.762 9.727 12.484 11 13.648 11Z","key":"0"}),
    createElement('path', {"d":"M11 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L8 18L8 22L14 18L19 18C20.656 18 22 16.656 22 15","key":"1"})
  );
});

ChatTriangleSlant.displayName = 'ChatTriangleSlant';

module.exports = ChatTriangleSlant;
module.exports.ChatTriangleSlant = ChatTriangleSlant;
module.exports.default = ChatTriangleSlant;
