'use strict';

const { createElement, forwardRef } = require('react');

const FileXWide = forwardRef(function FileXWide(
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
    createElement('path', {"d":"M22 7L22 20C22 21.105 21.105 22 20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L16.918 2Z","key":"0"}),
    createElement('path', {"d":"M22 8L18 8C16.895 8 16 7.105 16 6L16 2","key":"1"}),
    createElement('path', {"d":"M10 10L14 14","key":"2"}),
    createElement('path', {"d":"M14 10L10 14","key":"3"})
  );
});

FileXWide.displayName = 'FileXWide';

module.exports = FileXWide;
module.exports.FileXWide = FileXWide;
module.exports.default = FileXWide;
