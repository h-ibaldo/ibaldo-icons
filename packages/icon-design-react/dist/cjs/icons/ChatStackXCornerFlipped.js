'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackXCornerFlipped = forwardRef(function ChatStackXCornerFlipped(
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
    createElement('path', {"d":"M14 6L10 6L5 2L5 6L4 6C2.895 6 2 6.895 2 8L2 12C2 13.105 2.895 14 4 14L16 14C17.105 14 18 13.105 18 12","key":"0"}),
    createElement('path', {"d":"M22 12L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L7 18","key":"1"}),
    createElement('path', {"d":"M18 8L22 4","key":"2"}),
    createElement('path', {"d":"M22 8L18 4","key":"3"})
  );
});

ChatStackXCornerFlipped.displayName = 'ChatStackXCornerFlipped';

module.exports = ChatStackXCornerFlipped;
module.exports.ChatStackXCornerFlipped = ChatStackXCornerFlipped;
module.exports.default = ChatStackXCornerFlipped;
