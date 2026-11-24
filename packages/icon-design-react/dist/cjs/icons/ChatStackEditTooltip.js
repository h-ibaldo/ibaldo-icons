'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackEditTooltip = forwardRef(function ChatStackEditTooltip(
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
    createElement('path', {"d":"M2 10L2 15C2 16.656 3.344 18 5 18L7 18L10 22L13 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.344 16.656 6 15 6L14 6","key":"0"}),
    createElement('path', {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L10 2","key":"1"}),
    createElement('path', {"d":"M3.586 3.414L3.414 3.586C2.633 4.367 2.633 5.633 3.414 6.414L10 13L13 13L13 10L6.414 3.414C5.633 2.633 4.367 2.633 3.586 3.414Z","key":"2"}),
    createElement('path', {"d":"M8 5L5 8","key":"3"})
  );
});

ChatStackEditTooltip.displayName = 'ChatStackEditTooltip';

module.exports = ChatStackEditTooltip;
module.exports.ChatStackEditTooltip = ChatStackEditTooltip;
module.exports.default = ChatStackEditTooltip;
