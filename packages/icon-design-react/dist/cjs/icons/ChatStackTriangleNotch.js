'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackTriangleNotch = forwardRef(function ChatStackTriangleNotch(
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
    createElement('path', {"d":"M13.648 11L20.352 11C21.516 11 22.238 9.73 21.637 8.73L18.285 3.145C17.703 2.172 16.297 2.172 15.715 3.145L12.363 8.73C11.762 9.73 12.484 11 13.648 11Z","key":"0"}),
    createElement('path', {"d":"M12 2L4 2C2.895 2 2 2.895 2 4L2 12C2 13.105 2.895 14 4 14L5 14L5 18L10 14L11 14","key":"1"}),
    createElement('path', {"d":"M22 14L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L12 18","key":"2"})
  );
});

ChatStackTriangleNotch.displayName = 'ChatStackTriangleNotch';

module.exports = ChatStackTriangleNotch;
module.exports.ChatStackTriangleNotch = ChatStackTriangleNotch;
module.exports.default = ChatStackTriangleNotch;
