'use strict';

const { createElement, forwardRef } = require('react');

const ChatTypingWide = forwardRef(function ChatTypingWide(
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
    createElement('path', {"d":"M15 3L9 3C5.133 3 2 6.133 2 10C2 13.172 4.109 15.848 7 16.707L7 21L11.57 17L15 17C18.867 17 22 13.867 22 10C22 6.133 18.867 3 15 3Z","key":"0"}),
    createElement('path', {"d":"M8 10L8 10","key":"1"}),
    createElement('path', {"d":"M12 10L12 10","key":"2"}),
    createElement('path', {"d":"M16 10L16 10","key":"3"})
  );
});

ChatTypingWide.displayName = 'ChatTypingWide';

module.exports = ChatTypingWide;
module.exports.ChatTypingWide = ChatTypingWide;
module.exports.default = ChatTypingWide;
