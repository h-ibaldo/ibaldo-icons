'use strict';

const { createElement, forwardRef } = require('react');

const CodeSlashSquare = forwardRef(function CodeSlashSquare(
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
    createElement('path', {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z","key":"0"}),
    createElement('path', {"d":"M8 17C7.449 17 7 16.551 7 16L7 13L6 12L7 11L7 8C7 7.449 7.449 7 8 7","key":"1"}),
    createElement('path', {"d":"M16 17C16.551 17 17 16.551 17 16L17 13L18 12L17 11L17 8C17 7.449 16.551 7 16 7","key":"2"}),
    createElement('path', {"d":"M11 14L13 10","key":"3"})
  );
});

CodeSlashSquare.displayName = 'CodeSlashSquare';

module.exports = CodeSlashSquare;
module.exports.CodeSlashSquare = CodeSlashSquare;
module.exports.default = CodeSlashSquare;
