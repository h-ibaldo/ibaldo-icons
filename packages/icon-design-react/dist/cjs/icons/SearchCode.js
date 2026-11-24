'use strict';

const { createElement, forwardRef } = require('react');

const SearchCode = forwardRef(function SearchCode(
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
    createElement('path', {"d":"M12 7L10 15","key":"0"}),
    createElement('path', {"d":"M15 9L17 11L15 13","key":"1"}),
    createElement('path', {"d":"M7 9L5 11L7 13","key":"2"}),
    createElement('path', {"d":"M20 11C20 15.973 15.973 20 11 20C6.027 20 2 15.973 2 11C2 6.027 6.027 2 11 2C15.973 2 20 6.027 20 11Z","key":"3"}),
    createElement('path', {"d":"M17.363 17.363L22 22","key":"4"})
  );
});

SearchCode.displayName = 'SearchCode';

module.exports = SearchCode;
module.exports.SearchCode = SearchCode;
module.exports.default = SearchCode;
