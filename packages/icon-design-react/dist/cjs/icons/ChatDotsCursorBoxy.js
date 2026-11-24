'use strict';

const { createElement, forwardRef } = require('react');

const ChatDotsCursorBoxy = forwardRef(function ChatDotsCursorBoxy(
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
    createElement('path', {"d":"M2 5L2 22L7 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z","key":"0"}),
    createElement('path', {"d":"M7 10L7 10","key":"1"}),
    createElement('path', {"d":"M12 10L12 10","key":"2"}),
    createElement('path', {"d":"M17 7L17 13","key":"3"})
  );
});

ChatDotsCursorBoxy.displayName = 'ChatDotsCursorBoxy';

module.exports = ChatDotsCursorBoxy;
module.exports.ChatDotsCursorBoxy = ChatDotsCursorBoxy;
module.exports.default = ChatDotsCursorBoxy;
