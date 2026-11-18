'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackDotsVerticalSlant = forwardRef(function ChatStackDotsVerticalSlant(
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
    createElement('path', {"d":"M2 15C2 16.656 3.344 18 5 18L7 18L7 22L13 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.344 16.656 6 15 6L7 6","key":"0"}),
    createElement('path', {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L7 2","key":"1"}),
    createElement('path', {"d":"M2 2L2 2","key":"2"}),
    createElement('path', {"d":"M2 6L2 6","key":"3"}),
    createElement('path', {"d":"M2 10L2 10","key":"4"})
  );
});

ChatStackDotsVerticalSlant.displayName = 'ChatStackDotsVerticalSlant';

module.exports = ChatStackDotsVerticalSlant;
module.exports.ChatStackDotsVerticalSlant = ChatStackDotsVerticalSlant;
module.exports.default = ChatStackDotsVerticalSlant;
