'use strict';

const { createElement, forwardRef } = require('react');

const ArrowSyncCircleHook = forwardRef(function ArrowSyncCircleHook(
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
    createElement('path', {"d":"M10 12L8 14L6 12","key":"0"}),
    createElement('path', {"d":"M13 7L11 7C9.344 7 8 8.344 8 10L8 14","key":"1"}),
    createElement('path', {"d":"M14 12L16 10L18 12","key":"2"}),
    createElement('path', {"d":"M11 17L13 17C14.656 17 16 15.656 16 14L16 10","key":"3"}),
    createElement('path', {"d":"M2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12Z","key":"4"})
  );
});

ArrowSyncCircleHook.displayName = 'ArrowSyncCircleHook';

module.exports = ArrowSyncCircleHook;
module.exports.ArrowSyncCircleHook = ArrowSyncCircleHook;
module.exports.default = ArrowSyncCircleHook;
