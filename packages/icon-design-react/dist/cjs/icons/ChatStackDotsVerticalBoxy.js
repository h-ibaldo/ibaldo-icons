'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackDotsVerticalBoxy = forwardRef(function ChatStackDotsVerticalBoxy(
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
    createElement('path', {"d":"M2 15L2 22L7 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.344 16.656 6 15 6L7 6","key":"0"}),
    createElement('path', {"d":"M22 13L22 5C22 3.344 20.656 2 19 2L7 2","key":"1"}),
    createElement('path', {"d":"M2 2L2 2","key":"2"}),
    createElement('path', {"d":"M2 6L2 6","key":"3"}),
    createElement('path', {"d":"M2 10L2 10","key":"4"})
  );
});

ChatStackDotsVerticalBoxy.displayName = 'ChatStackDotsVerticalBoxy';

module.exports = ChatStackDotsVerticalBoxy;
module.exports.ChatStackDotsVerticalBoxy = ChatStackDotsVerticalBoxy;
module.exports.default = ChatStackDotsVerticalBoxy;
