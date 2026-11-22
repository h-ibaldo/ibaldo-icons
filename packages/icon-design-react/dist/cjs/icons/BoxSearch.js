'use strict';

const { createElement, forwardRef } = require('react');

const BoxSearch = forwardRef(function BoxSearch(
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
    createElement('path', {"d":"M21 17.5C21 19.434 19.434 21 17.5 21C15.566 21 14 19.434 14 17.5C14 15.566 15.566 14 17.5 14C19.434 14 21 15.566 21 17.5Z","key":"0"}),
    createElement('path', {"d":"M19.973 19.973L22 22","key":"1"}),
    createElement('path', {"d":"M7 4.5L17 9.5","key":"2"}),
    createElement('path', {"d":"M2 7L12 12L22 7","key":"3"}),
    createElement('path', {"d":"M12 14L12 12","key":"4"}),
    createElement('path', {"d":"M12 22L12 21","key":"5"}),
    createElement('path', {"d":"M12 22L2 17L2 7L12 2L22 7L22 12","key":"6"})
  );
});

BoxSearch.displayName = 'BoxSearch';

module.exports = BoxSearch;
module.exports.BoxSearch = BoxSearch;
module.exports.default = BoxSearch;
