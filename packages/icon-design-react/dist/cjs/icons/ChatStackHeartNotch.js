'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackHeartNotch = forwardRef(function ChatStackHeartNotch(
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
    createElement('path', {"d":"M9.422 10.492L7.148 8.219C6.473 7.543 6.473 6.449 7.148 5.773C7.824 5.098 8.918 5.098 9.594 5.773L10 6.184L10.406 5.773C11.082 5.098 12.176 5.098 12.852 5.773C13.527 6.449 13.527 7.543 12.852 8.219L10.574 10.492C10.258 10.813 9.742 10.813 9.422 10.492Z","key":"0"}),
    createElement('path', {"d":"M2 4L2 12C2 13.105 2.895 14 4 14L5 14L5 18L10 14L16 14C17.105 14 18 13.105 18 12L18 4C18 2.895 17.105 2 16 2L4 2C2.895 2 2 2.895 2 4Z","key":"1"}),
    createElement('path', {"d":"M22 8L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L12 18","key":"2"})
  );
});

ChatStackHeartNotch.displayName = 'ChatStackHeartNotch';

module.exports = ChatStackHeartNotch;
module.exports.ChatStackHeartNotch = ChatStackHeartNotch;
module.exports.default = ChatStackHeartNotch;
