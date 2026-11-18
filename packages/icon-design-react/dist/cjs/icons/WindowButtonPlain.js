'use strict';

const { createElement, forwardRef } = require('react');

const WindowButtonPlain = forwardRef(function WindowButtonPlain(
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
    createElement('path', {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z","key":"0"}),
    createElement('path', {"d":"M2 8L22 8","key":"1"}),
    createElement('path', {"d":"M15 18L9 18C7.895 18 7 17.105 7 16C7 14.895 7.895 14 9 14L15 14C16.105 14 17 14.895 17 16C17 17.105 16.105 18 15 18Z","key":"2"})
  );
});

WindowButtonPlain.displayName = 'WindowButtonPlain';

module.exports = WindowButtonPlain;
module.exports.WindowButtonPlain = WindowButtonPlain;
module.exports.default = WindowButtonPlain;
