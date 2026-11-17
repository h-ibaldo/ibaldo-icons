'use strict';

const { createElement, forwardRef } = require('react');

const ChatMinusCornerBoxy = forwardRef(function ChatMinusCornerBoxy(
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
    createElement('path', {"d":"M12 2L5 2C3.344 2 2 3.344 2 5L2 22L7 18L19 18C20.656 18 22 16.656 22 15L22 10","key":"0"}),
    createElement('path', {"d":"M22 5L16 5","key":"1"})
  );
});

ChatMinusCornerBoxy.displayName = 'ChatMinusCornerBoxy';

module.exports = ChatMinusCornerBoxy;
module.exports.ChatMinusCornerBoxy = ChatMinusCornerBoxy;
module.exports.default = ChatMinusCornerBoxy;
