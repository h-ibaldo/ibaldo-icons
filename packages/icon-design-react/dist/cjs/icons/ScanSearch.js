'use strict';

const { createElement, forwardRef } = require('react');

const ScanSearch = forwardRef(function ScanSearch(
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
    createElement('path', {"d":"M15 11.5C15 13.434 13.434 15 11.5 15C9.566 15 8 13.434 8 11.5C8 9.566 9.566 8 11.5 8C13.434 8 15 9.566 15 11.5Z","key":"0"}),
    createElement('path', {"d":"M13.973 13.973L16 16","key":"1"}),
    createElement('path', {"d":"M22 17L22 20C22 21.105 21.105 22 20 22L17 22","key":"2"}),
    createElement('path', {"d":"M2 7L2 4C2 2.895 2.895 2 4 2L7 2","key":"3"}),
    createElement('path', {"d":"M17 2L20 2C21.105 2 22 2.895 22 4L22 7","key":"4"}),
    createElement('path', {"d":"M7 22L4 22C2.895 22 2 21.105 2 20L2 17","key":"5"})
  );
});

ScanSearch.displayName = 'ScanSearch';

module.exports = ScanSearch;
module.exports.ScanSearch = ScanSearch;
module.exports.default = ScanSearch;
