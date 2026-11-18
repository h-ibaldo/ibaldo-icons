'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackLockCornerNotch = forwardRef(function ChatStackLockCornerNotch(
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
    createElement('path', {"d":"M12 2L4 2C2.895 2 2 2.895 2 4L2 12C2 13.105 2.895 14 4 14L5 14L5 18L10 14L11 14","key":"0"}),
    createElement('path', {"d":"M22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L12 18","key":"1"}),
    createElement('path', {"d":"M22 12L14 12L14 7L22 7Z","key":"2"}),
    createElement('path', {"d":"M15 7L15 5C15 3.344 16.344 2 18 2C19.656 2 21 3.344 21 5L21 7","key":"3"})
  );
});

ChatStackLockCornerNotch.displayName = 'ChatStackLockCornerNotch';

module.exports = ChatStackLockCornerNotch;
module.exports.ChatStackLockCornerNotch = ChatStackLockCornerNotch;
module.exports.default = ChatStackLockCornerNotch;
