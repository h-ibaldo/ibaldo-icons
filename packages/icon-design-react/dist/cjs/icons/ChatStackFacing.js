'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackFacing = forwardRef(function ChatStackFacing(
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
    createElement('path', {"d":"M2.105 4L2.105 18L7.105 14L16.105 14C17.211 14 18.105 13.105 18.105 12L18.105 4C18.105 2.895 17.211 2 16.105 2L4.105 2C3.004 2 2.105 2.895 2.105 4Z","key":"0"}),
    createElement('path', {"d":"M8.105 17C8.105 18.105 9.004 19 10.105 19L17.105 19L22.105 22L22.105 10.414C22.105 9.508 21.746 8.641 21.105 8","key":"1"})
  );
});

ChatStackFacing.displayName = 'ChatStackFacing';

module.exports = ChatStackFacing;
module.exports.ChatStackFacing = ChatStackFacing;
module.exports.default = ChatStackFacing;
