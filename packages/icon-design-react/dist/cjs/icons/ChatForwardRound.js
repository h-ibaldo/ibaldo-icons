'use strict';

const { createElement, forwardRef } = require('react');

const ChatForwardRound = forwardRef(function ChatForwardRound(
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
    createElement('path', {"d":"M8 12L16 12","key":"1"}),
    createElement('path', {"d":"M14 10L16 12L14 14","key":"2"})
  );
});

ChatForwardRound.displayName = 'ChatForwardRound';

module.exports = ChatForwardRound;
module.exports.ChatForwardRound = ChatForwardRound;
module.exports.default = ChatForwardRound;
