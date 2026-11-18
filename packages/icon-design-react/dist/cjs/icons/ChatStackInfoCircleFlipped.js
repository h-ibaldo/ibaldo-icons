'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackInfoCircleFlipped = forwardRef(function ChatStackInfoCircleFlipped(
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
    createElement('path', {"d":"M22 7.5C22 10.535 19.535 13 16.5 13C13.465 13 11 10.535 11 7.5C11 4.465 13.465 2 16.5 2C19.535 2 22 4.465 22 7.5Z","key":"0"}),
    createElement('path', {"d":"M16.5 5L16.5 5","key":"1"}),
    createElement('path', {"d":"M16.5 8L16.5 10","key":"2"}),
    createElement('path', {"d":"M22 15L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L7 18","key":"3"}),
    createElement('path', {"d":"M8 4L5 2L5 6L4 6C2.895 6 2 6.895 2 8L2 12C2 13.105 2.895 14 4 14L10 14","key":"4"})
  );
});

ChatStackInfoCircleFlipped.displayName = 'ChatStackInfoCircleFlipped';

module.exports = ChatStackInfoCircleFlipped;
module.exports.ChatStackInfoCircleFlipped = ChatStackInfoCircleFlipped;
module.exports.default = ChatStackInfoCircleFlipped;
