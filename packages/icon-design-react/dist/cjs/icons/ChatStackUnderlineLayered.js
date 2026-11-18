'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackUnderlineLayered = forwardRef(function ChatStackUnderlineLayered(
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
    createElement('path', {"d":"M12 22L2 22","key":"0"}),
    createElement('path', {"d":"M2 9L2 18L5 16L15 16C16.656 16 18 14.656 18 13L18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9Z","key":"1"}),
    createElement('path', {"d":"M5 6L5 5C5 3.344 6.344 2 8 2L19 2C20.656 2 22 3.344 22 5L22 9C22 10.656 20.656 12 19 12L18 12","key":"2"})
  );
});

ChatStackUnderlineLayered.displayName = 'ChatStackUnderlineLayered';

module.exports = ChatStackUnderlineLayered;
module.exports.ChatStackUnderlineLayered = ChatStackUnderlineLayered;
module.exports.default = ChatStackUnderlineLayered;
