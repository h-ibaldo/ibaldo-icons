'use strict';

const { createElement, forwardRef } = require('react');

const ChatEditTooltip = forwardRef(function ChatEditTooltip(
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
    createElement('path', {"d":"M14 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L8 18L12 22L16 18L19 18C20.656 18 22 16.656 22 15L22 12","key":"0"}),
    createElement('path', {"d":"M21.414 3.414L21.586 3.586C22.367 4.367 22.367 5.633 21.586 6.414L15 13L12 13L12 10L18.586 3.414C19.367 2.633 20.633 2.633 21.414 3.414Z","key":"1"}),
    createElement('path', {"d":"M17 5L20 8","key":"2"})
  );
});

ChatEditTooltip.displayName = 'ChatEditTooltip';

module.exports = ChatEditTooltip;
module.exports.ChatEditTooltip = ChatEditTooltip;
module.exports.default = ChatEditTooltip;
