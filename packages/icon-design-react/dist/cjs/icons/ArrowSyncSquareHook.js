'use strict';

const { createElement, forwardRef } = require('react');

const ArrowSyncSquareHook = forwardRef(function ArrowSyncSquareHook(
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
    createElement('path', {"d":"M19 2L5 2C3.344 2 2 3.344 2 5L2 19C2 20.656 3.344 22 5 22L19 22C20.656 22 22 20.656 22 19L22 5C22 3.344 20.656 2 19 2Z","key":"0"}),
    createElement('path', {"d":"M10 12L8 14L6 12","key":"1"}),
    createElement('path', {"d":"M13 7L11 7C9.344 7 8 8.344 8 10L8 14","key":"2"}),
    createElement('path', {"d":"M14 12L16 10L18 12","key":"3"}),
    createElement('path', {"d":"M11 17L13 17C14.656 17 16 15.656 16 14L16 10","key":"4"})
  );
});

ArrowSyncSquareHook.displayName = 'ArrowSyncSquareHook';

module.exports = ArrowSyncSquareHook;
module.exports.ArrowSyncSquareHook = ArrowSyncSquareHook;
module.exports.default = ArrowSyncSquareHook;
