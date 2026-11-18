'use strict';

const { createElement, forwardRef } = require('react');

const ChatReplyAllBoxy = forwardRef(function ChatReplyAllBoxy(
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
    createElement('path', {"d":"M13 11L11 9L13 7","key":"1"}),
    createElement('path', {"d":"M9 11L7 9L9 7","key":"2"}),
    createElement('path', {"d":"M11 9L14 9C15.656 9 17 10.344 17 12L17 13","key":"3"})
  );
});

ChatReplyAllBoxy.displayName = 'ChatReplyAllBoxy';

module.exports = ChatReplyAllBoxy;
module.exports.ChatReplyAllBoxy = ChatReplyAllBoxy;
module.exports.default = ChatReplyAllBoxy;
