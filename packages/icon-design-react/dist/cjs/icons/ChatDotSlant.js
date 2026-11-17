'use strict';

const { createElement, forwardRef } = require('react');

const ChatDotSlant = forwardRef(function ChatDotSlant(
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
    createElement('path', {"d":"M13 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L8 18L8 22L14 18L19 18C20.656 18 22 16.656 22 15L22 11","key":"0"}),
    createElement('path', {"d":"M16 5C16 6.656 17.344 8 19 8C20.656 8 22 6.656 22 5C22 3.344 20.656 2 19 2C17.344 2 16 3.344 16 5Z","key":"1"})
  );
});

ChatDotSlant.displayName = 'ChatDotSlant';

module.exports = ChatDotSlant;
module.exports.ChatDotSlant = ChatDotSlant;
module.exports.default = ChatDotSlant;
