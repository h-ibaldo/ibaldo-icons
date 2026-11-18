'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackTypingLayered = forwardRef(function ChatStackTypingLayered(
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
    createElement('path', {"d":"M2 9L2 22L7 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9Z","key":"0"}),
    createElement('path', {"d":"M5 6L5 5C5 3.344 6.344 2 8 2L19 2C20.656 2 22 3.344 22 5L22 11C22 12.656 20.656 14 19 14L18 14","key":"1"}),
    createElement('path', {"d":"M6 12L6 12","key":"2"}),
    createElement('path', {"d":"M10 12L10 12","key":"3"}),
    createElement('path', {"d":"M14 12L14 12","key":"4"})
  );
});

ChatStackTypingLayered.displayName = 'ChatStackTypingLayered';

module.exports = ChatStackTypingLayered;
module.exports.ChatStackTypingLayered = ChatStackTypingLayered;
module.exports.default = ChatStackTypingLayered;
