'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackReplyAllTooltip = forwardRef(function ChatStackReplyAllTooltip(
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
    createElement('path', {"d":"M2 9L2 15C2 16.656 3.344 18 5 18L7 18L10 22L13 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9Z","key":"0"}),
    createElement('path', {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L7 2","key":"1"}),
    createElement('path', {"d":"M11 14L9 12L11 10","key":"2"}),
    createElement('path', {"d":"M7 14L5 12L7 10","key":"3"}),
    createElement('path', {"d":"M9 12L13 12C14.105 12 15 12.895 15 14","key":"4"})
  );
});

ChatStackReplyAllTooltip.displayName = 'ChatStackReplyAllTooltip';

module.exports = ChatStackReplyAllTooltip;
module.exports.ChatStackReplyAllTooltip = ChatStackReplyAllTooltip;
module.exports.default = ChatStackReplyAllTooltip;
