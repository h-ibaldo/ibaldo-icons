'use strict';

const { createElement, forwardRef } = require('react');

const ChatEqualsBroken = forwardRef(function ChatEqualsBroken(
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
    createElement('path', {"d":"M8 8L16 8","key":"0"}),
    createElement('path', {"d":"M8 12L16 12","key":"1"}),
    createElement('path', {"d":"M12 22L15 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18","key":"2"})
  );
});

ChatEqualsBroken.displayName = 'ChatEqualsBroken';

module.exports = ChatEqualsBroken;
module.exports.ChatEqualsBroken = ChatEqualsBroken;
module.exports.default = ChatEqualsBroken;
