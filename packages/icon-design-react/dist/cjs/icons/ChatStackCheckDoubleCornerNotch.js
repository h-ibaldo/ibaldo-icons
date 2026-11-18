'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackCheckDoubleCornerNotch = forwardRef(function ChatStackCheckDoubleCornerNotch(
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
    createElement('path', {"d":"M22 8L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L12 18","key":"0"}),
    createElement('path', {"d":"M2 4L3.5 6L8 2","key":"1"}),
    createElement('path', {"d":"M6.801 7.066L7.5 8L12 4","key":"2"}),
    createElement('path', {"d":"M2 10L2 12C2 13.105 2.895 14 4 14L5 14L5 18L10 14L16 14C17.105 14 18 13.105 18 12L18 4C18 2.895 17.105 2 16 2L15 2","key":"3"})
  );
});

ChatStackCheckDoubleCornerNotch.displayName = 'ChatStackCheckDoubleCornerNotch';

module.exports = ChatStackCheckDoubleCornerNotch;
module.exports.ChatStackCheckDoubleCornerNotch = ChatStackCheckDoubleCornerNotch;
module.exports.default = ChatStackCheckDoubleCornerNotch;
