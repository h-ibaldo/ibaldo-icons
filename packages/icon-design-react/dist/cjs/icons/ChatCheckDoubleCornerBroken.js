'use strict';

const { createElement, forwardRef } = require('react');

const ChatCheckDoubleCornerBroken = forwardRef(function ChatCheckDoubleCornerBroken(
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
    createElement('path', {"d":"M12 4L13.5 6L18 2","key":"0"}),
    createElement('path', {"d":"M16.801 7.066L17.5 8L22 4","key":"1"}),
    createElement('path', {"d":"M8 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18","key":"2"}),
    createElement('path', {"d":"M22 11L22 15C22 16.656 20.656 18 19 18L15 18L12 22","key":"3"})
  );
});

ChatCheckDoubleCornerBroken.displayName = 'ChatCheckDoubleCornerBroken';

module.exports = ChatCheckDoubleCornerBroken;
module.exports.ChatCheckDoubleCornerBroken = ChatCheckDoubleCornerBroken;
module.exports.default = ChatCheckDoubleCornerBroken;
