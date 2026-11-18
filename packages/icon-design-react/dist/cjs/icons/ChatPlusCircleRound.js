'use strict';

const { createElement, forwardRef } = require('react');

const ChatPlusCircleRound = forwardRef(function ChatPlusCircleRound(
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
    createElement('path', {"d":"M17 9L17 5","key":"1"}),
    createElement('path', {"d":"M15 7L19 7","key":"2"}),
    createElement('path', {"d":"M10 2.199C5.438 3.129 2 7.16 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C16.84 22 20.871 18.566 21.801 14","key":"3"})
  );
});

ChatPlusCircleRound.displayName = 'ChatPlusCircleRound';

module.exports = ChatPlusCircleRound;
module.exports.ChatPlusCircleRound = ChatPlusCircleRound;
module.exports.default = ChatPlusCircleRound;
