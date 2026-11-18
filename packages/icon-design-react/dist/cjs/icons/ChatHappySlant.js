'use strict';

const { createElement, forwardRef } = require('react');

const ChatHappySlant = forwardRef(function ChatHappySlant(
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
    createElement('path', {"d":"M2 5L2 15C2 16.656 3.344 18 5 18L8 18L8 22L14 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z","key":"0"}),
    createElement('path', {"d":"M10 7L10 8","key":"1"}),
    createElement('path', {"d":"M14 7L14 8","key":"2"}),
    createElement('path', {"d":"M7 10.652C8.191 12.086 9.988 13 12 13C14.012 13 15.809 12.086 17 10.652","key":"3"})
  );
});

ChatHappySlant.displayName = 'ChatHappySlant';

module.exports = ChatHappySlant;
module.exports.ChatHappySlant = ChatHappySlant;
module.exports.default = ChatHappySlant;
