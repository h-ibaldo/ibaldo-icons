'use strict';

const { createElement, forwardRef } = require('react');

const SearchPin = forwardRef(function SearchPin(
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
    createElement('path', {"d":"M14.999999976489562,9.998779299956368c0-2.209138999198331-1.79086100079985-4-4-4s-4,1.790861000801669-4,4","key":"2"}),
    createElement('path', {"d":"M6.999999976489562,9.998779299956368v.000002000000677c0,1.280577209327021.508707317090739,2.508705317090062,1.414212148160004,3.414210148159327l2.585787851839996,2.585787851839996,2.585787851839996-2.585787851839996c.905504831071084-.905504831069265,1.414212148160004-2.133632938832307,1.414212148160004-3.414210148159327v-.000002000000677","key":"3"}),
    createElement('circle', {"cx":"10.999999976489562","cy":"9.998779299956368","r":"1","key":"4"})
  );
});

SearchPin.displayName = 'SearchPin';

module.exports = SearchPin;
module.exports.SearchPin = SearchPin;
module.exports.default = SearchPin;
