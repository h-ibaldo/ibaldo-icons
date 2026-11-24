'use strict';

const { createElement, forwardRef } = require('react');

const WindowLink = forwardRef(function WindowLink(
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
    createElement('path', {"d":"M14 19L18 19","key":"0"}),
    createElement('path', {"d":"M14 22L13 22C11.344 22 10 20.656 10 19C10 17.344 11.344 16 13 16L14 16","key":"1"}),
    createElement('path', {"d":"M18 16L19 16C20.656 16 22 17.344 22 19C22 20.656 20.656 22 19 22L18 22","key":"2"}),
    createElement('path', {"d":"M7 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 13","key":"3"}),
    createElement('path', {"d":"M2 8L22 8","key":"4"}),
    createElement('path', {"d":"M5 5L5 5","key":"5"}),
    createElement('path', {"d":"M8 5L8 5","key":"6"}),
    createElement('path', {"d":"M11 5L11 5","key":"7"})
  );
});

WindowLink.displayName = 'WindowLink';

module.exports = WindowLink;
module.exports.WindowLink = WindowLink;
module.exports.default = WindowLink;
