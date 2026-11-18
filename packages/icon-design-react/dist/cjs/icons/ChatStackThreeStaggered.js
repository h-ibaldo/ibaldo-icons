'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackThreeStaggered = forwardRef(function ChatStackThreeStaggered(
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
    createElement('path', {"d":"M2 6L17 6C17.551 6 18 5.555 18 5L18 3C18 2.445 17.551 2 17 2L5 2C4.449 2 4 2.445 4 3L4 4Z","key":"0"}),
    createElement('path', {"d":"M4 14L19 14C19.551 14 20 13.555 20 13L20 11C20 10.445 19.551 10 19 10L7 10C6.449 10 6 10.445 6 11L6 12Z","key":"1"}),
    createElement('path', {"d":"M6 22L21 22C21.551 22 22 21.555 22 21L22 19C22 18.445 21.551 18 21 18L9 18C8.449 18 8 18.445 8 19L8 20Z","key":"2"})
  );
});

ChatStackThreeStaggered.displayName = 'ChatStackThreeStaggered';

module.exports = ChatStackThreeStaggered;
module.exports.ChatStackThreeStaggered = ChatStackThreeStaggered;
module.exports.default = ChatStackThreeStaggered;
