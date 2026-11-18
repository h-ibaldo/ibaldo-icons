'use strict';

const { createElement, forwardRef } = require('react');

const FileLinesSearch = forwardRef(function FileLinesSearch(
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
    createElement('path', {"d":"M11 22L5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L13.016 2C13.646 2 14.25 2.25 14.696 2.696L18.304 6.304C18.75 6.75 19 7.354 19 7.984L19 9","key":"0"}),
    createElement('path', {"d":"M13 2L13 7C13 7.552 13.448 8 14 8L19 8","key":"1"}),
    createElement('path', {"d":"M20 16C20 18.209 18.209 20 16 20C13.791 20 12 18.209 12 16C12 13.791 13.791 12 16 12C18.209 12 20 13.791 20 16Z","key":"2"}),
    createElement('path', {"d":"M19 19L22 22","key":"3"}),
    createElement('path', {"d":"M7 8L9 8","key":"4"}),
    createElement('path', {"d":"M7 12L9 12","key":"5"}),
    createElement('path', {"d":"M7 16L9 16","key":"6"})
  );
});

FileLinesSearch.displayName = 'FileLinesSearch';

module.exports = FileLinesSearch;
module.exports.FileLinesSearch = FileLinesSearch;
module.exports.default = FileLinesSearch;
