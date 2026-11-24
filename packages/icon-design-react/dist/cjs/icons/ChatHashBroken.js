'use strict';

const { createElement, forwardRef } = require('react');

const ChatHashBroken = forwardRef(function ChatHashBroken(
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
    createElement('path', {"d":"M12 22L15 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18","key":"0"}),
    createElement('path', {"d":"M11 6L9 14","key":"1"}),
    createElement('path', {"d":"M15 6L13 14","key":"2"}),
    createElement('path', {"d":"M8 8L17 8","key":"3"}),
    createElement('path', {"d":"M7 12L16 12","key":"4"})
  );
});

ChatHashBroken.displayName = 'ChatHashBroken';

module.exports = ChatHashBroken;
module.exports.ChatHashBroken = ChatHashBroken;
module.exports.default = ChatHashBroken;
