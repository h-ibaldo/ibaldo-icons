'use strict';

const { createElement, forwardRef } = require('react');

const FileSearch = forwardRef(function FileSearch(
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
    createElement('path', {"d":"M10 22L6 22C4.895 22 4 21.105 4 20L4 4C4 2.895 4.895 2 6 2L14.016 2C14.646 2 15.25 2.25 15.696 2.696L19.304 6.304C19.75 6.75 20 7.354 20 7.984L20 10","key":"0"}),
    createElement('path', {"d":"M14 2L14 7C14 7.552 14.448 8 15 8L20 8","key":"1"}),
    createElement('path', {"d":"M19 16C19 18.209 17.209 20 15 20C12.791 20 11 18.209 11 16C11 13.791 12.791 12 15 12C17.209 12 19 13.791 19 16Z","key":"2"}),
    createElement('path', {"d":"M18 19L21 22","key":"3"})
  );
});

FileSearch.displayName = 'FileSearch';

module.exports = FileSearch;
module.exports.FileSearch = FileSearch;
module.exports.default = FileSearch;
