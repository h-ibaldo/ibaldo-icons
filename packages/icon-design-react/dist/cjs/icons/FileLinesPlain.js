'use strict';

const { createElement, forwardRef } = require('react');

const FileLinesPlain = forwardRef(function FileLinesPlain(
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
    createElement('path', {"d":"M18 22L6 22C4.895 22 4 21.105 4 20L4 4C4 2.895 4.895 2 6 2L18 2C19.105 2 20 2.895 20 4L20 20C20 21.105 19.105 22 18 22Z","key":"0"}),
    createElement('path', {"d":"M9 12L15 12","key":"1"}),
    createElement('path', {"d":"M9 8L15 8","key":"2"}),
    createElement('path', {"d":"M9 16L15 16","key":"3"})
  );
});

FileLinesPlain.displayName = 'FileLinesPlain';

module.exports = FileLinesPlain;
module.exports.FileLinesPlain = FileLinesPlain;
module.exports.default = FileLinesPlain;
