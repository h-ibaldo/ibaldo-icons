'use strict';

const { createElement, forwardRef } = require('react');

const ChatImageCornerWide = forwardRef(function ChatImageCornerWide(
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
    createElement('path', {"d":"M7 4.293C4.109 5.152 2 7.828 2 11C2 14.172 4.109 16.848 7 17.707L7 22L11.57 18L15 18C18.867 18 22 14.867 22 11C22 7.828 19.891 5.152 17 4.293","key":"0"}),
    createElement('path', {"d":"M15 12L9 12C7.895 12 7 11.105 7 10L7 4C7 2.895 7.895 2 9 2L15 2C16.105 2 17 2.895 17 4L17 10C17 11.105 16.105 12 15 12Z","key":"1"}),
    createElement('path', {"d":"M17 6C13.688 6 11 8.688 11 12","key":"2"}),
    createElement('path', {"d":"M10 5L10 5","key":"3"})
  );
});

ChatImageCornerWide.displayName = 'ChatImageCornerWide';

module.exports = ChatImageCornerWide;
module.exports.ChatImageCornerWide = ChatImageCornerWide;
module.exports.default = ChatImageCornerWide;
