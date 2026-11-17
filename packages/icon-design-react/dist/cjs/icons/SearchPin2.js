'use strict';

const { createElement, forwardRef } = require('react');

const SearchPin2 = forwardRef(function SearchPin2(
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
    createElement('circle', {"cx":"10.999999976489562","cy":"10.998779299955459","r":"8.999999999998636","key":"0"}),
    createElement('line', {"x1":"17.363952613210131","y1":"17.362731936675118","x2":"21.999999976489562","y2":"21.998779299956368","key":"1"}),
    createElement('path', {"d":"M13.999999976489562,9.998779299956368c0-1.656854249398748-1.343145750599433-3-3-3s-3,1.343145750601252-3,3","key":"2"}),
    createElement('path', {"d":"M7.999999976489562,9.998779299956368c0,2.29986572265625,1.197631835941138,4.3160400390625,3,5.471435546875,1.802368164060681-1.1553955078125,3-3.17156982421875,3-5.471435546875","key":"3"}),
    createElement('line', {"x1":"10.999999976489562","y1":"10.008779299956586","x2":"10.999999976489562","y2":"9.998779299956368","key":"4"})
  );
});

SearchPin2.displayName = 'SearchPin2';

module.exports = SearchPin2;
module.exports.SearchPin2 = SearchPin2;
module.exports.default = SearchPin2;
