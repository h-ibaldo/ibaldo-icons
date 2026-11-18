'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackSunNotch = forwardRef(function ChatStackSunNotch(
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
    createElement('path', {"d":"M12 2L4 2C2.895 2 2 2.895 2 4L2 12C2 13.105 2.895 14 4 14L5 14L5 18L10 14L12 14","key":"0"}),
    createElement('path', {"d":"M22 15L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L12 18","key":"1"}),
    createElement('path', {"d":"M16 12C13.789 12 12 10.211 12 8C12 5.789 13.789 4 16 4C18.211 4 20 5.789 20 8C20 10.211 18.211 12 16 12Z","key":"2"}),
    createElement('path', {"d":"M16 2L16 4","key":"3"}),
    createElement('path', {"d":"M16 12L16 14","key":"4"}),
    createElement('path', {"d":"M21.195 5L19.465 6","key":"5"}),
    createElement('path', {"d":"M12.535 10L10.805 11","key":"6"}),
    createElement('path', {"d":"M21.195 11L19.465 10","key":"7"}),
    createElement('path', {"d":"M12.535 6L10.805 5","key":"8"})
  );
});

ChatStackSunNotch.displayName = 'ChatStackSunNotch';

module.exports = ChatStackSunNotch;
module.exports.ChatStackSunNotch = ChatStackSunNotch;
module.exports.default = ChatStackSunNotch;
