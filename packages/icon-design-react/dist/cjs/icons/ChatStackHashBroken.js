'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackHashBroken = forwardRef(function ChatStackHashBroken(
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
    createElement('path', {"d":"M17 2L5 2C3.344 2 2 3.344 2 5L2 13","key":"0"}),
    createElement('path', {"d":"M14 22L17 18L19 18C20.656 18 22 16.656 22 15L22 9C22 7.344 20.656 6 19 6L9 6C7.344 6 6 7.344 6 9L6 15C6 16.656 7.344 18 9 18L11 18","key":"1"}),
    createElement('path', {"d":"M12.5 9L11.75 15","key":"2"}),
    createElement('path', {"d":"M16.25 9L15.5 15","key":"3"}),
    createElement('path', {"d":"M11 10.355L17 10.355","key":"4"}),
    createElement('path', {"d":"M11 13.645L17 13.645","key":"5"})
  );
});

ChatStackHashBroken.displayName = 'ChatStackHashBroken';

module.exports = ChatStackHashBroken;
module.exports.ChatStackHashBroken = ChatStackHashBroken;
module.exports.default = ChatStackHashBroken;
