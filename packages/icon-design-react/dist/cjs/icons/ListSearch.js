'use strict';

const { createElement, forwardRef } = require('react');

const ListSearch = forwardRef(function ListSearch(
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
    createElement('line', {"x1":"2.00999997648978","y1":"1.998779299956368","x2":"1.999999976489562","y2":"1.998779299956368","key":"0"}),
    createElement('line', {"x1":"2.00999997648978","y1":"5.998779299956368","x2":"1.999999976489562","y2":"5.998779299956368","key":"1"}),
    createElement('line', {"x1":"2.00999997648978","y1":"9.998779299956368","x2":"1.999999976489562","y2":"9.998779299956368","key":"2"}),
    createElement('line', {"x1":"5.999999976489562","y1":"1.998779299956368","x2":"14.999999976489562","y2":"1.998779299956368","key":"3"}),
    createElement('line', {"x1":"5.999999976489562","y1":"5.998779299956368","x2":"14.999999976489562","y2":"5.998779299956368","key":"4"}),
    createElement('line', {"x1":"5.999999976489562","y1":"9.998779299956368","x2":"8.999999976489562","y2":"9.998779299956368","key":"5"}),
    createElement('circle', {"cx":"16.499999976489562","cy":"14.498779299956368","r":"5.5","key":"6"}),
    createElement('line', {"x1":"12.61090085539945","y1":"18.387878421050118","x2":"8.999999976489562","y2":"21.998779299956368","key":"7"})
  );
});

ListSearch.displayName = 'ListSearch';

module.exports = ListSearch;
module.exports.ListSearch = ListSearch;
module.exports.default = ListSearch;
