'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackEditLayered = forwardRef(function ChatStackEditLayered(
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
    createElement('path', {"d":"M21.414 21.586L21.586 21.414C22.367 20.633 22.367 19.367 21.586 18.586L15 12L12 12L12 15L18.586 21.586C19.367 22.367 20.633 22.367 21.414 21.586Z","key":"0"}),
    createElement('path', {"d":"M17 20L20 17","key":"1"}),
    createElement('path', {"d":"M18 10L18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9L2 22L7 18L10 18","key":"2"}),
    createElement('path', {"d":"M5 6L5 5C5 3.344 6.344 2 8 2L19 2C20.656 2 22 3.344 22 5L22 14","key":"3"})
  );
});

ChatStackEditLayered.displayName = 'ChatStackEditLayered';

module.exports = ChatStackEditLayered;
module.exports.ChatStackEditLayered = ChatStackEditLayered;
module.exports.default = ChatStackEditLayered;
