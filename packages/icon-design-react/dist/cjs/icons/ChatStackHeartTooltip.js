'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackHeartTooltip = forwardRef(function ChatStackHeartTooltip(
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
    createElement('path', {"d":"M9.422 14.492L7.148 12.219C6.473 11.543 6.473 10.449 7.148 9.773C7.824 9.098 8.918 9.098 9.594 9.773L10 10.184L10.406 9.773C11.082 9.098 12.176 9.098 12.852 9.773C13.527 10.449 13.527 11.543 12.852 12.219L10.574 14.492C10.258 14.813 9.742 14.813 9.422 14.492Z","key":"2"})
  );
});

ChatStackHeartTooltip.displayName = 'ChatStackHeartTooltip';

module.exports = ChatStackHeartTooltip;
module.exports.ChatStackHeartTooltip = ChatStackHeartTooltip;
module.exports.default = ChatStackHeartTooltip;
