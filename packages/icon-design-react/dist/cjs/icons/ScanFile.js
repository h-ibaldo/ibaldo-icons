'use strict';

const { createElement, forwardRef } = require('react');

const ScanFile = forwardRef(function ScanFile(
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
    createElement('path', {"d":"M16 18L8 18C7.448 18 7 17.552 7 17L7 7C7 6.448 7.448 6 8 6L12.586 6C12.851 6 13.105 6.105 13.293 6.293L16.707 9.707C16.895 9.895 17 10.149 17 10.414L17 17C17 17.552 16.552 18 16 18Z","key":"0"}),
    createElement('path', {"d":"M12 6L12 11L17 11","key":"1"}),
    createElement('path', {"d":"M22 6L22 4C22 2.895 21.105 2 20 2L18 2","key":"2"}),
    createElement('path', {"d":"M6 2L4 2C2.895 2 2 2.895 2 4L2 6","key":"3"}),
    createElement('path', {"d":"M2 18L2 20C2 21.105 2.895 22 4 22L6 22","key":"4"}),
    createElement('path', {"d":"M18 22L20 22C21.105 22 22 21.105 22 20L22 18","key":"5"})
  );
});

ScanFile.displayName = 'ScanFile';

module.exports = ScanFile;
module.exports.ScanFile = ScanFile;
module.exports.default = ScanFile;
