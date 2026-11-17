'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackLaughBoxy = forwardRef(function ChatStackLaughBoxy(
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
    createElement('path', {"d":"M2 9L2 22L7 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9Z","key":"0"}),
    createElement('path', {"d":"M22 13L22 5C22 3.344 20.656 2 19 2L7 2","key":"1"}),
    createElement('path', {"d":"M7 12L13 12C13 13.656 11.656 15 10 15C8.344 15 7 13.656 7 12Z","key":"2"}),
    createElement('path', {"d":"M8 9L8 9","key":"3"}),
    createElement('path', {"d":"M12 9L12 9","key":"4"})
  );
});

ChatStackLaughBoxy.displayName = 'ChatStackLaughBoxy';

module.exports = ChatStackLaughBoxy;
module.exports.ChatStackLaughBoxy = ChatStackLaughBoxy;
module.exports.default = ChatStackLaughBoxy;
