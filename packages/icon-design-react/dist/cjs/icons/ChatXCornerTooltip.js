'use strict';

const { createElement, forwardRef } = require('react');

const ChatXCornerTooltip = forwardRef(function ChatXCornerTooltip(
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
    createElement('path', {"d":"M13 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L8 18L12 22L16 18L19 18C20.656 18 22 16.656 22 15L22 12","key":"0"}),
    createElement('path', {"d":"M18 7L22 3","key":"1"}),
    createElement('path', {"d":"M22 7L18 3","key":"2"})
  );
});

ChatXCornerTooltip.displayName = 'ChatXCornerTooltip';

module.exports = ChatXCornerTooltip;
module.exports.ChatXCornerTooltip = ChatXCornerTooltip;
module.exports.default = ChatXCornerTooltip;
