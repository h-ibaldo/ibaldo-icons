'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackCheckCornerStaggered = forwardRef(function ChatStackCheckCornerStaggered(
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
    createElement('path', {"d":"M14 4L15.5 6L20 2","key":"0"}),
    createElement('path', {"d":"M10 2L6 2C4.895 2 4 2.895 4 4L4 7L2 10L16 10C16.738 10 17.375 9.598 17.723 9","key":"1"}),
    createElement('path', {"d":"M6 22L20 22C21.105 22 22 21.105 22 20L22 16C22 14.895 21.105 14 20 14L10 14C8.895 14 8 14.895 8 16L8 19Z","key":"2"})
  );
});

ChatStackCheckCornerStaggered.displayName = 'ChatStackCheckCornerStaggered';

module.exports = ChatStackCheckCornerStaggered;
module.exports.ChatStackCheckCornerStaggered = ChatStackCheckCornerStaggered;
module.exports.default = ChatStackCheckCornerStaggered;
