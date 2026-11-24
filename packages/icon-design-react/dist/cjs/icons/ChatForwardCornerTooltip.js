'use strict';

const { createElement, forwardRef } = require('react');

const ChatForwardCornerTooltip = forwardRef(function ChatForwardCornerTooltip(
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
    createElement('path', {"d":"M10 4L5 4C3.344 4 2 5.344 2 7L2 15C2 16.656 3.344 18 5 18L8 18L12 22L16 18L19 18C20.656 18 22 16.656 22 15L22 10","key":"0"}),
    createElement('path', {"d":"M15 4L22 4","key":"1"}),
    createElement('path', {"d":"M20 2L22 4L20 6","key":"2"})
  );
});

ChatForwardCornerTooltip.displayName = 'ChatForwardCornerTooltip';

module.exports = ChatForwardCornerTooltip;
module.exports.ChatForwardCornerTooltip = ChatForwardCornerTooltip;
module.exports.default = ChatForwardCornerTooltip;
