'use strict';

const { createElement, forwardRef } = require('react');

const ChatForwardCornerRound = forwardRef(function ChatForwardCornerRound(
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
    createElement('path', {"d":"M15 5L22 5","key":"0"}),
    createElement('path', {"d":"M20 3L22 5L20 7","key":"1"}),
    createElement('path', {"d":"M12 2C6.477 2 2 6.477 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C17.523 22 22 17.523 22 12C22 11.664 21.98 11.328 21.949 11","key":"2"})
  );
});

ChatForwardCornerRound.displayName = 'ChatForwardCornerRound';

module.exports = ChatForwardCornerRound;
module.exports.ChatForwardCornerRound = ChatForwardCornerRound;
module.exports.default = ChatForwardCornerRound;
