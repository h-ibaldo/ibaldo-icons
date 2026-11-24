'use strict';

const { createElement, forwardRef } = require('react');

const ChatCheckRound = forwardRef(function ChatCheckRound(
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
    createElement('path', {"d":"M12 2C6.477 2 2 6.477 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z","key":"0"}),
    createElement('path', {"d":"M9 12L10.5 14L15 10","key":"1"})
  );
});

ChatCheckRound.displayName = 'ChatCheckRound';

module.exports = ChatCheckRound;
module.exports.ChatCheckRound = ChatCheckRound;
module.exports.default = ChatCheckRound;
