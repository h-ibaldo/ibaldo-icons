'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackCheckDoubleFacing = forwardRef(function ChatStackCheckDoubleFacing(
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
    createElement('path', {"d":"M6 7L6.5 9L10 6","key":"0"}),
    createElement('path', {"d":"M10.176 8.707L10.5 10L14 7","key":"1"}),
    createElement('path', {"d":"M2 4L2 18L7 14L16 14C17.105 14 18 13.105 18 12L18 4C18 2.895 17.105 2 16 2L4 2C2.895 2 2 2.895 2 4Z","key":"2"}),
    createElement('path', {"d":"M8 17C8 18.105 8.895 19 10 19L17 19L22 22L22 10.414C22 9.508 21.641 8.641 21 8","key":"3"})
  );
});

ChatStackCheckDoubleFacing.displayName = 'ChatStackCheckDoubleFacing';

module.exports = ChatStackCheckDoubleFacing;
module.exports.ChatStackCheckDoubleFacing = ChatStackCheckDoubleFacing;
module.exports.default = ChatStackCheckDoubleFacing;
