'use strict';

const { createElement, forwardRef } = require('react');

const ChatXCornerRound = forwardRef(function ChatXCornerRound(
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
    createElement('path', {"d":"M18 7L22 3","key":"0"}),
    createElement('path', {"d":"M22 7L18 3","key":"1"}),
    createElement('path', {"d":"M14 2.199C13.355 2.07 12.684 2 12 2C6.477 2 2 6.477 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C17.523 22 22 17.523 22 12C22 11.664 21.98 11.328 21.949 11","key":"2"})
  );
});

ChatXCornerRound.displayName = 'ChatXCornerRound';

module.exports = ChatXCornerRound;
module.exports.ChatXCornerRound = ChatXCornerRound;
module.exports.default = ChatXCornerRound;
