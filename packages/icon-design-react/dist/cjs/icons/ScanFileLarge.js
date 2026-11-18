'use strict';

const { createElement, forwardRef } = require('react');

const ScanFileLarge = forwardRef(function ScanFileLarge(
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
    createElement('path', {"d":"M17 19L7 19C6.448 19 6 18.552 6 18L6 6C6 5.448 6.448 5 7 5L13.586 5C13.851 5 14.105 5.105 14.293 5.293L17.707 8.707C17.895 8.895 18 9.149 18 9.414L18 18C18 18.552 17.552 19 17 19Z","key":"0"}),
    createElement('path', {"d":"M13 6L13 10L18 10","key":"1"}),
    createElement('path', {"d":"M22 5L22 4C22 2.895 21.105 2 20 2L19 2","key":"2"}),
    createElement('path', {"d":"M5 2L4 2C2.895 2 2 2.895 2 4L2 5","key":"3"}),
    createElement('path', {"d":"M2 19L2 20C2 21.105 2.895 22 4 22L5 22","key":"4"}),
    createElement('path', {"d":"M19 22L20 22C21.105 22 22 21.105 22 20L22 19","key":"5"})
  );
});

ScanFileLarge.displayName = 'ScanFileLarge';

module.exports = ScanFileLarge;
module.exports.ScanFileLarge = ScanFileLarge;
module.exports.default = ScanFileLarge;
