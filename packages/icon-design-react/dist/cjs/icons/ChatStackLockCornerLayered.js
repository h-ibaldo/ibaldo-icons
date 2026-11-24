'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackLockCornerLayered = forwardRef(function ChatStackLockCornerLayered(
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
    createElement('path', {"d":"M18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9L2 22L7 18L11 18","key":"0"}),
    createElement('path', {"d":"M5 6L5 5C5 3.344 6.344 2 8 2L19 2C20.656 2 22 3.344 22 5L22 10","key":"1"}),
    createElement('path', {"d":"M22 22L14 22L14 17L22 17Z","key":"2"}),
    createElement('path', {"d":"M15 17L15 15C15 13.344 16.344 12 18 12C19.656 12 21 13.344 21 15L21 17","key":"3"})
  );
});

ChatStackLockCornerLayered.displayName = 'ChatStackLockCornerLayered';

module.exports = ChatStackLockCornerLayered;
module.exports.ChatStackLockCornerLayered = ChatStackLockCornerLayered;
module.exports.default = ChatStackLockCornerLayered;
