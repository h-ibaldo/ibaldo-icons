'use strict';

const { createElement, forwardRef } = require('react');

const CameraSyncOrbit = forwardRef(function CameraSyncOrbit(
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
    createElement('path', {"d":"M7.848 9.078L9.23 9.078L10.617 7L13.383 7L14.77 9.078L16.152 9.078C16.918 9.078 17.539 9.695 17.539 10.461L17.539 14.617C17.539 15.379 16.918 16 16.152 16L7.848 16C7.082 16 6.461 15.379 6.461 14.617L6.461 10.461C6.461 9.695 7.082 9.078 7.848 9.078Z","key":"0"}),
    createElement('path', {"d":"M11 12C11 11.449 11.449 11 12 11C12.551 11 13 11.449 13 12C13 12.551 12.551 13 12 13C11.449 13 11 12.551 11 12Z","key":"1"}),
    createElement('path', {"d":"M17 6L20 6L20 3","key":"2"}),
    createElement('path', {"d":"M7 18L4 18L4 21","key":"3"}),
    createElement('path', {"d":"M2.199 14C2.07 13.355 2 12.684 2 12C2 6.477 6.477 2 12 2C15.273 2 18.176 3.57 20 6","key":"4"}),
    createElement('path', {"d":"M21.801 10C21.93 10.645 22 11.316 22 12C22 17.523 17.523 22 12 22C8.727 22 5.824 20.43 4 18","key":"5"})
  );
});

CameraSyncOrbit.displayName = 'CameraSyncOrbit';

module.exports = CameraSyncOrbit;
module.exports.CameraSyncOrbit = CameraSyncOrbit;
module.exports.default = CameraSyncOrbit;
