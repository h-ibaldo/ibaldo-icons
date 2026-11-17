'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackHashFacing = forwardRef(function ChatStackHashFacing(
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
    createElement('path', {"d":"M2 4L2 18L6 15L16 15C17.105 15 18 14.105 18 13L18 4C18 2.895 17.105 2 16 2L4 2C2.895 2 2 2.895 2 4Z","key":"0"}),
    createElement('path', {"d":"M8 18C8 19.105 8.895 20 10 20L18 20L22 22L22 10.414C22 9.508 21.641 8.641 21 8","key":"1"}),
    createElement('path', {"d":"M9 5L7 12","key":"2"}),
    createElement('path', {"d":"M13 5L11 12","key":"3"}),
    createElement('path', {"d":"M7 7L14 7","key":"4"}),
    createElement('path', {"d":"M6 10L13 10","key":"5"})
  );
});

ChatStackHashFacing.displayName = 'ChatStackHashFacing';

module.exports = ChatStackHashFacing;
module.exports.ChatStackHashFacing = ChatStackHashFacing;
module.exports.default = ChatStackHashFacing;
