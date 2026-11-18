'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackForwardCornerFlipped = forwardRef(function ChatStackForwardCornerFlipped(
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
    createElement('path', {"d":"M18 12C18 13.105 17.105 14 16 14L4 14C2.895 14 2 13.105 2 12L2 8C2 6.895 2.895 6 4 6L5 6L5 2L10 6L12 6","key":"0"}),
    createElement('path', {"d":"M22 12L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L7 18","key":"1"}),
    createElement('path', {"d":"M16 6L22 6","key":"2"}),
    createElement('path', {"d":"M20 4L22 6L20 8","key":"3"})
  );
});

ChatStackForwardCornerFlipped.displayName = 'ChatStackForwardCornerFlipped';

module.exports = ChatStackForwardCornerFlipped;
module.exports.ChatStackForwardCornerFlipped = ChatStackForwardCornerFlipped;
module.exports.default = ChatStackForwardCornerFlipped;
