'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackOffNotch = forwardRef(function ChatStackOffNotch(
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
    createElement('path', {"d":"M19 8L19 7C19 5.895 18.105 5 17 5L16 5","key":"0"}),
    createElement('path', {"d":"M19 13L19 16C19 17.105 18.105 18 17 18L16 18L16 22L11 18","key":"1"}),
    createElement('path', {"d":"M22 16L8 2","key":"2"}),
    createElement('path', {"d":"M11 5L4 5C2.895 5 2 5.895 2 7L2 12C2 13.105 2.895 14 4 14L5 14L5 18L10 14L13 14C14.105 14 15 13.105 15 12L15 9Z","key":"3"})
  );
});

ChatStackOffNotch.displayName = 'ChatStackOffNotch';

module.exports = ChatStackOffNotch;
module.exports.ChatStackOffNotch = ChatStackOffNotch;
module.exports.default = ChatStackOffNotch;
