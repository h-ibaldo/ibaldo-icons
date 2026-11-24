'use strict';

const { createElement, forwardRef } = require('react');

const Search = forwardRef(function Search(
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
    createElement('circle', {"cx":"10.999999993642632","cy":"10.998779299955459","r":"8.999999999998636","key":"0"}),
    createElement('line', {"x1":"17.363952630354106","y1":"17.362731936675118","x2":"21.999999993642632","y2":"21.998779299956368","key":"1"})
  );
});

Search.displayName = 'Search';

module.exports = Search;
module.exports.Search = Search;
module.exports.default = Search;
