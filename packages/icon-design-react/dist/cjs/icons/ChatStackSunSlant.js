'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackSunSlant = forwardRef(function ChatStackSunSlant(
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
    createElement('path', {"d":"M2 15C2 16.656 3.344 18 5 18L7 18L7 22L13 18L15 18C16.656 18 18 16.656 18 15L18 8.414C18 7.508 17.641 6.641 17 6","key":"0"}),
    createElement('path', {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L14 2","key":"1"}),
    createElement('path', {"d":"M7.5 12C5.289 12 3.5 10.211 3.5 8C3.5 5.789 5.289 4 7.5 4C9.711 4 11.5 5.789 11.5 8C11.5 10.211 9.711 12 7.5 12Z","key":"2"}),
    createElement('path', {"d":"M7.5 2L7.5 4","key":"3"}),
    createElement('path', {"d":"M7.5 12L7.5 14","key":"4"}),
    createElement('path', {"d":"M12.695 5L10.965 6","key":"5"}),
    createElement('path', {"d":"M4.035 10L2.305 11","key":"6"}),
    createElement('path', {"d":"M12.695 11L10.965 10","key":"7"}),
    createElement('path', {"d":"M4.035 6L2.305 5","key":"8"})
  );
});

ChatStackSunSlant.displayName = 'ChatStackSunSlant';

module.exports = ChatStackSunSlant;
module.exports.ChatStackSunSlant = ChatStackSunSlant;
module.exports.default = ChatStackSunSlant;
