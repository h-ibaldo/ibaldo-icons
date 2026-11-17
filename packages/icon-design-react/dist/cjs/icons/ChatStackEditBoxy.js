'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackEditBoxy = forwardRef(function ChatStackEditBoxy(
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
    createElement('path', {"d":"M18 10L18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9L2 22L7 18L10 18","key":"0"}),
    createElement('path', {"d":"M22 13L22 5C22 3.344 20.656 2 19 2L7 2","key":"1"}),
    createElement('path', {"d":"M21.414 21.586L21.586 21.414C22.367 20.633 22.367 19.367 21.586 18.586L15 12L12 12L12 15L18.586 21.586C19.367 22.367 20.633 22.367 21.414 21.586Z","key":"2"}),
    createElement('path', {"d":"M17 20L20 17","key":"3"})
  );
});

ChatStackEditBoxy.displayName = 'ChatStackEditBoxy';

module.exports = ChatStackEditBoxy;
module.exports.ChatStackEditBoxy = ChatStackEditBoxy;
module.exports.default = ChatStackEditBoxy;
