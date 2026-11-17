'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackStaggered = forwardRef(function ChatStackStaggered(
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
    createElement('path', {"d":"M2 10L16 10C17.105 10 18 9.105 18 8L18 4C18 2.895 17.105 2 16 2L6 2C4.895 2 4 2.895 4 4L4 7Z","key":"0"}),
    createElement('path', {"d":"M6 22L20 22C21.105 22 22 21.105 22 20L22 16C22 14.895 21.105 14 20 14L10 14C8.895 14 8 14.895 8 16L8 19Z","key":"1"})
  );
});

ChatStackStaggered.displayName = 'ChatStackStaggered';

module.exports = ChatStackStaggered;
module.exports.ChatStackStaggered = ChatStackStaggered;
module.exports.default = ChatStackStaggered;
