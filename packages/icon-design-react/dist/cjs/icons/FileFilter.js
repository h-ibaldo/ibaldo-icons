'use strict';

const { createElement, forwardRef } = require('react');

const FileFilter = forwardRef(function FileFilter(
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
    createElement('path', {"d":"M12 13L22 13L22 14.519C22 14.823 21.862 15.11 21.625 15.3L17 19L12.375 15.3C12.138 15.11 12 14.823 12 14.519L12 13Z","key":"0"}),
    createElement('path', {"d":"M17 19L17 22","key":"1"}),
    createElement('path', {"d":"M19 9L19 4C19 2.895 18.105 2 17 2L8.984 2C8.354 2 7.75 2.25 7.304 2.696L3.696 6.304C3.25 6.75 3 7.354 3 7.984L3 20C3 21.105 3.895 22 5 22L12 22","key":"2"}),
    createElement('path', {"d":"M9 2L9 7C9 7.552 8.552 8 8 8L3 8","key":"3"})
  );
});

FileFilter.displayName = 'FileFilter';

module.exports = FileFilter;
module.exports.FileFilter = FileFilter;
module.exports.default = FileFilter;
