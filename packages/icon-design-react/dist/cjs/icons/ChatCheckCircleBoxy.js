'use strict';

const { createElement, forwardRef } = require('react');

const ChatCheckCircleBoxy = forwardRef(function ChatCheckCircleBoxy(
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
    createElement('path', {"d":"M15 7L16.5 8.5L19 6","key":"1"}),
    createElement('path', {"d":"M10 2L5 2C3.344 2 2 3.344 2 5L2 22L7 18L19 18C20.656 18 22 16.656 22 15L22 14","key":"2"})
  );
});

ChatCheckCircleBoxy.displayName = 'ChatCheckCircleBoxy';

module.exports = ChatCheckCircleBoxy;
module.exports.ChatCheckCircleBoxy = ChatCheckCircleBoxy;
module.exports.default = ChatCheckCircleBoxy;
