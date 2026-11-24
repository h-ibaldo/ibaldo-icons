'use strict';

const { createElement, forwardRef } = require('react');

const LassoPointer = forwardRef(function LassoPointer(
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
    createElement('path', {"d":"M15 19L14 10L22 15L17 15Z","key":"0"}),
    createElement('path', {"d":"M5 16C5 17.105 5.895 18 7 18C8.105 18 9 17.105 9 16C9 14.895 8.105 14 7 14C5.895 14 5 14.895 5 16Z","key":"1"}),
    createElement('path', {"d":"M6 18C6 18 6.945 22 11 22","key":"2"}),
    createElement('path', {"d":"M12 17C10.918 17 9.875 16.871 8.898 16.633","key":"3"}),
    createElement('path', {"d":"M5.25 15.031C3.254 13.66 2 11.691 2 9.5C2 5.359 6.477 2 12 2C17.523 2 22 5.359 22 9.5C22 10.012 21.93 10.516 21.801 11","key":"4"})
  );
});

LassoPointer.displayName = 'LassoPointer';

module.exports = LassoPointer;
module.exports.LassoPointer = LassoPointer;
module.exports.default = LassoPointer;
