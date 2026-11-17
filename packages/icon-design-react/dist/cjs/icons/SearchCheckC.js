'use strict';

const { createElement, forwardRef } = require('react');

const SearchCheckC = forwardRef(function SearchCheckC(
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
    createElement('circle', {"cx":"8.999999993264282","cy":"8.998779299956368","r":"7.000000000000001","key":"0"}),
    createElement('line', {"x1":"21.999999993264282","y1":"21.998779299956368","x2":"13.999999993264282","y2":"13.998779299956368","key":"1"}),
    createElement('polyline', {"points":"6.749999993264282 8.998779299956368 8.249999993264282 10.498779299956368 11.249999993264282 7.498779299956368","key":"2"})
  );
});

SearchCheckC.displayName = 'SearchCheckC';

module.exports = SearchCheckC;
module.exports.SearchCheckC = SearchCheckC;
module.exports.default = SearchCheckC;
