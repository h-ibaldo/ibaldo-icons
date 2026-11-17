'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackSunBroken = forwardRef(function ChatStackSunBroken(
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
    createElement('path', {"d":"M11 2L5 2C3.344 2 2 3.344 2 5L2 13","key":"0"}),
    createElement('path', {"d":"M16 12C13.789 12 12 10.211 12 8C12 5.789 13.789 4 16 4C18.211 4 20 5.789 20 8C20 10.211 18.211 12 16 12Z","key":"1"}),
    createElement('path', {"d":"M16 2L16 4","key":"2"}),
    createElement('path', {"d":"M16 12L16 14","key":"3"}),
    createElement('path', {"d":"M21.195 5L19.465 6","key":"4"}),
    createElement('path', {"d":"M12.535 10L10.805 11","key":"5"}),
    createElement('path', {"d":"M21.195 11L19.465 10","key":"6"}),
    createElement('path', {"d":"M12.535 6L10.805 5","key":"7"}),
    createElement('path', {"d":"M14 22L17 18L19 18C20.656 18 22 16.656 22 15","key":"8"}),
    createElement('path', {"d":"M7 6.785C6.391 7.332 6 8.117 6 9L6 15C6 16.656 7.344 18 9 18L11 18","key":"9"})
  );
});

ChatStackSunBroken.displayName = 'ChatStackSunBroken';

module.exports = ChatStackSunBroken;
module.exports.ChatStackSunBroken = ChatStackSunBroken;
module.exports.default = ChatStackSunBroken;
