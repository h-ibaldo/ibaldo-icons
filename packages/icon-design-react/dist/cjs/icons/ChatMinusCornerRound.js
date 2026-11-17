'use strict';

const { createElement, forwardRef } = require('react');

const ChatMinusCornerRound = forwardRef(function ChatMinusCornerRound(
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
    createElement('path', {"d":"M12 2C6.477 2 2 6.477 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C17.523 22 22 17.523 22 12C22 11.316 21.93 10.645 21.801 10","key":"1"})
  );
});

ChatMinusCornerRound.displayName = 'ChatMinusCornerRound';

module.exports = ChatMinusCornerRound;
module.exports.ChatMinusCornerRound = ChatMinusCornerRound;
module.exports.default = ChatMinusCornerRound;
