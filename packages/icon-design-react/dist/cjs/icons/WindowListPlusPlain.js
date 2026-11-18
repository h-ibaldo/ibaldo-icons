'use strict';

const { createElement, forwardRef } = require('react');

const WindowListPlusPlain = forwardRef(function WindowListPlusPlain(
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
    createElement('path', {"d":"M18 16L18 22","key":"0"}),
    createElement('path', {"d":"M21 19L15 19","key":"1"}),
    createElement('path', {"d":"M11 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 14","key":"2"}),
    createElement('path', {"d":"M2 8L22 8","key":"3"}),
    createElement('path', {"d":"M9 13L15 13","key":"4"}),
    createElement('path', {"d":"M6 13L6 13","key":"5"}),
    createElement('path', {"d":"M9 17L11 17","key":"6"}),
    createElement('path', {"d":"M6 17L6 17","key":"7"})
  );
});

WindowListPlusPlain.displayName = 'WindowListPlusPlain';

module.exports = WindowListPlusPlain;
module.exports.WindowListPlusPlain = WindowListPlusPlain;
module.exports.default = WindowListPlusPlain;
