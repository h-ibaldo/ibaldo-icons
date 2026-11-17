'use strict';

const { createElement, forwardRef } = require('react');

const ChatCheckCornerBroken = forwardRef(function ChatCheckCornerBroken(
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
    createElement('path', {"d":"M16 4L17.5 6L22 2","key":"0"}),
    createElement('path', {"d":"M12 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18","key":"1"}),
    createElement('path', {"d":"M22 9L22 15C22 16.656 20.656 18 19 18L15 18L12 22","key":"2"})
  );
});

ChatCheckCornerBroken.displayName = 'ChatCheckCornerBroken';

module.exports = ChatCheckCornerBroken;
module.exports.ChatCheckCornerBroken = ChatCheckCornerBroken;
module.exports.default = ChatCheckCornerBroken;
