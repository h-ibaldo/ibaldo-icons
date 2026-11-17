'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackDotsCircleNotch = forwardRef(function ChatStackDotsCircleNotch(
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
    createElement('path', {"d":"M15.5 7L15.5 7","key":"1"}),
    createElement('path', {"d":"M18.5 7L18.5 7","key":"2"}),
    createElement('path', {"d":"M22 14L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L12 18","key":"3"}),
    createElement('path', {"d":"M10 2L4 2C2.895 2 2 2.895 2 4L2 12C2 13.105 2.895 14 4 14L5 14L5 18L10 14L12 14","key":"4"})
  );
});

ChatStackDotsCircleNotch.displayName = 'ChatStackDotsCircleNotch';

module.exports = ChatStackDotsCircleNotch;
module.exports.ChatStackDotsCircleNotch = ChatStackDotsCircleNotch;
module.exports.default = ChatStackDotsCircleNotch;
