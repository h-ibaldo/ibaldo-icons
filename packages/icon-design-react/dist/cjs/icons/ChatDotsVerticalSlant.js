'use strict';

const { createElement, forwardRef } = require('react');

const ChatDotsVerticalSlant = forwardRef(function ChatDotsVerticalSlant(
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
    createElement('path', {"d":"M22 2L22 2","key":"0"}),
    createElement('path', {"d":"M22 6L22 6","key":"1"}),
    createElement('path', {"d":"M22 10L22 10","key":"2"}),
    createElement('path', {"d":"M17 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L8 18L8 22L14 18L19 18C20.656 18 22 16.656 22 15","key":"3"})
  );
});

ChatDotsVerticalSlant.displayName = 'ChatDotsVerticalSlant';

module.exports = ChatDotsVerticalSlant;
module.exports.ChatDotsVerticalSlant = ChatDotsVerticalSlant;
module.exports.default = ChatDotsVerticalSlant;
