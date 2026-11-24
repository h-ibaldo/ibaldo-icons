'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackImageBroken = forwardRef(function ChatStackImageBroken(
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
    createElement('path', {"d":"M17 2L5 2C3.344 2 2 3.344 2 5L2 13","key":"0"}),
    createElement('path', {"d":"M14 22L17 18L19 18C20.656 18 22 16.656 22 15L22 9C22 7.344 20.656 6 19 6L9 6C7.344 6 6 7.344 6 9L6 15C6 16.656 7.344 18 9 18L11 18","key":"1"}),
    createElement('path', {"d":"M9 13L11 11L15 15","key":"2"}),
    createElement('path', {"d":"M15 15L17 13L19 15","key":"3"}),
    createElement('path', {"d":"M15.5 10C15.223 10 15 9.777 15 9.5C15 9.223 15.223 9 15.5 9C15.777 9 16 9.223 16 9.5C16 9.777 15.777 10 15.5 10Z","key":"4"})
  );
});

ChatStackImageBroken.displayName = 'ChatStackImageBroken';

module.exports = ChatStackImageBroken;
module.exports.ChatStackImageBroken = ChatStackImageBroken;
module.exports.default = ChatStackImageBroken;
