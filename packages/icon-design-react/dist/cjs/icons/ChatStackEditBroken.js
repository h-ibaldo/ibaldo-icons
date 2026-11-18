'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackEditBroken = forwardRef(function ChatStackEditBroken(
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
    createElement('path', {"d":"M15 2L5 2C3.344 2 2 3.344 2 5L2 13","key":"0"}),
    createElement('path', {"d":"M11 6L9 6C7.344 6 6 7.344 6 9L6 15C6 16.656 7.344 18 9 18L11 18","key":"1"}),
    createElement('path', {"d":"M14 22L17 18L19 18C20.656 18 22 16.656 22 15L22 11","key":"2"}),
    createElement('path', {"d":"M21.414 3.414L21.586 3.586C22.367 4.367 22.367 5.633 21.586 6.414L15 13L12 13L12 10L18.586 3.414C19.367 2.633 20.633 2.633 21.414 3.414Z","key":"3"}),
    createElement('path', {"d":"M17 5L20 8","key":"4"})
  );
});

ChatStackEditBroken.displayName = 'ChatStackEditBroken';

module.exports = ChatStackEditBroken;
module.exports.ChatStackEditBroken = ChatStackEditBroken;
module.exports.default = ChatStackEditBroken;
