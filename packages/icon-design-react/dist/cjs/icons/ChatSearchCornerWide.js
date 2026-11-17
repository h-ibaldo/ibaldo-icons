'use strict';

const { createElement, forwardRef } = require('react');

const ChatSearchCornerWide = forwardRef(function ChatSearchCornerWide(
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
    createElement('path', {"d":"M21 10.5C21 12.434 19.434 14 17.5 14C15.566 14 14 12.434 14 10.5C14 8.566 15.566 7 17.5 7C19.434 7 21 8.566 21 10.5Z","key":"0"}),
    createElement('path', {"d":"M19.977 12.973L22 15","key":"1"}),
    createElement('path', {"d":"M18.594 4C17.539 3.367 16.316 3 15 3L9 3C5.133 3 2 6.133 2 10C2 13.172 4.109 15.848 7 16.707L7 21L11.57 17L15 17C15.34 17 15.672 16.969 16 16.922","key":"2"})
  );
});

ChatSearchCornerWide.displayName = 'ChatSearchCornerWide';

module.exports = ChatSearchCornerWide;
module.exports.ChatSearchCornerWide = ChatSearchCornerWide;
module.exports.default = ChatSearchCornerWide;
