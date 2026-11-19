'use strict';

const { createElement, forwardRef } = require('react');

const FileImageInsetPlain = forwardRef(function FileImageInsetPlain(
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
    createElement('path', {"d":"M10 9.5C10 9.776 9.776 10 9.5 10C9.224 10 9 9.776 9 9.5C9 9.224 9.224 9 9.5 9C9.776 9 10 9.224 10 9.5Z","key":"0"}),
    createElement('path', {"d":"M18 22L6 22C4.895 22 4 21.105 4 20L4 4C4 2.895 4.895 2 6 2L18 2C19.105 2 20 2.895 20 4L20 20C20 21.105 19.105 22 18 22Z","key":"1"}),
    createElement('path', {"d":"M10 14L7 18","key":"2"}),
    createElement('path', {"d":"M17 16.75L14 13L10 18","key":"3"})
  );
});

FileImageInsetPlain.displayName = 'FileImageInsetPlain';

module.exports = FileImageInsetPlain;
module.exports.FileImageInsetPlain = FileImageInsetPlain;
module.exports.default = FileImageInsetPlain;
