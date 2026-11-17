'use strict';

const { createElement, forwardRef } = require('react');

const LaptopCartFlat = forwardRef(function LaptopCartFlat(
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
    createElement('path', {"d":"M8.000000003161404,6.998782736171052h-3c-.552284749828686,0-1,.447715250171314-1,1v9c0,.552284749832324.447715250171314,1,1,1h14c.552284749830505,0,1-.447715250167676,1-1v-1","key":"0"}),
    createElement('line', {"x1":"2.000000003161404","y1":"21.998782736171052","x2":"22.000000003161404","y2":"21.998782736171052","key":"1"}),
    createElement('path', {"d":"M8.000000003161404,1.998782736171052h1.340603842021665c.400028108568222,0,.761566238068554.238396853557788.919145030018626.606080701421888l2.740251127959709,6.393919298578112h7l2-5h-11","key":"2"}),
    createElement('path', {"d":"M20.000000003161404,11.998782736171052h-8.065741454098315c-.399347692220545,0-.637543390401333-.445072733251436-.416025147160326-.777350098112947l1.481766601258641-2.222649901887053","key":"3"}),
    createElement('line', {"x1":"18.000000003161404","y1":"11.998782736171052","x2":"18.000000003161404","y2":"12.998782736171052","key":"4"}),
    createElement('line', {"x1":"13.000000003161404","y1":"11.998782736171052","x2":"13.000000003161404","y2":"12.998782736171052","key":"5"})
  );
});

LaptopCartFlat.displayName = 'LaptopCartFlat';

module.exports = LaptopCartFlat;
module.exports.LaptopCartFlat = LaptopCartFlat;
module.exports.default = LaptopCartFlat;
