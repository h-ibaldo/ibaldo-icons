'use strict';

const { createElement, forwardRef } = require('react');

const SearchB = forwardRef(function SearchB(
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
    createElement('circle', {"cx":"9.999999993642632","cy":"9.998779299956368","r":"8","key":"0"}),
    createElement('line', {"x1":"15.656860345214227","y1":"15.655639651518868","x2":"21.999999993642632","y2":"21.998779299956368","key":"1"})
  );
});

SearchB.displayName = 'SearchB';

module.exports = SearchB;
module.exports.SearchB = SearchB;
module.exports.default = SearchB;
