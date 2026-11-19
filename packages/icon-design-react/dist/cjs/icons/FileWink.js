'use strict';

const { createElement, forwardRef } = require('react');

const FileWink = forwardRef(function FileWink(
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
    createElement('path', {"d":"M9 16C9.776 16.614 10.827 17 12 17C13.173 17 14.224 16.614 15 16","key":"0"}),
    createElement('path', {"d":"M15 12L15 12","key":"1"}),
    createElement('path', {"d":"M10 12L8 12","key":"2"}),
    createElement('path', {"d":"M18 22L6 22C4.895 22 4 21.105 4 20L4 4C4 2.895 4.895 2 6 2L14.016 2C14.646 2 15.25 2.25 15.696 2.696L19.304 6.304C19.75 6.75 20 7.354 20 7.984L20 20C20 21.105 19.105 22 18 22Z","key":"3"}),
    createElement('path', {"d":"M14 2L14 7C14 7.552 14.448 8 15 8L20 8","key":"4"})
  );
});

FileWink.displayName = 'FileWink';

module.exports = FileWink;
module.exports.FileWink = FileWink;
module.exports.default = FileWink;
