'use strict';

const { createElement, forwardRef } = require('react');

const FileTerminal = forwardRef(function FileTerminal(
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
    createElement('path', {"d":"M19 17L19 4C19 2.895 18.105 2 17 2L8.984 2C8.355 2 7.75 2.25 7.305 2.695L3.695 6.305C3.25 6.75 3 7.355 3 7.984L3 20C3 21.105 3.895 22 5 22L7 22","key":"0"}),
    createElement('path', {"d":"M9 2L9 7C9 7.551 8.551 8 8 8L3 8","key":"1"}),
    createElement('path', {"d":"M11 15L14.5 18.5L11 22","key":"2"}),
    createElement('path', {"d":"M16 22L21 22","key":"3"})
  );
});

FileTerminal.displayName = 'FileTerminal';

module.exports = FileTerminal;
module.exports.FileTerminal = FileTerminal;
module.exports.default = FileTerminal;
