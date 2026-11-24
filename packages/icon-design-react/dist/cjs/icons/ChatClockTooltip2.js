'use strict';

const { createElement, forwardRef } = require('react');

const ChatClockTooltip2 = forwardRef(function ChatClockTooltip2(
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
    createElement('path', {"d":"M22 7C22 9.762 19.762 12 17 12C14.238 12 12 9.762 12 7C12 4.238 14.238 2 17 2C19.762 2 22 4.238 22 7Z","key":"0"}),
    createElement('path', {"d":"M19 7L17 7L17 5","key":"1"}),
    createElement('path', {"d":"M10 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18L12 22L15 18L19 18C20.656 18 22 16.656 22 15L22 14","key":"2"})
  );
});

ChatClockTooltip2.displayName = 'ChatClockTooltip2';

module.exports = ChatClockTooltip2;
module.exports.ChatClockTooltip2 = ChatClockTooltip2;
module.exports.default = ChatClockTooltip2;
