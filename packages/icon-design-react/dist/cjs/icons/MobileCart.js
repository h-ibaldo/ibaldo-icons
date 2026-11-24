'use strict';

const { createElement, forwardRef } = require('react');

const MobileCart = forwardRef(function MobileCart(
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
    createElement('path', {"d":"M2.000000003161404,6.998782736171052h1.340603842021665c.400028108568222,0,.761566238068554.238396853557788.919145030018626.606080701421888l2.740251127959709,6.393919298578112h6l2-5H5.000000003161404","key":"0"}),
    createElement('path', {"d":"M13.000000003161404,16.998782736171052h-7.065741454098315c-.399347692220545,0-.637543390401333-.445072733251436-.416025147160326-.777350098112947l1.481766601258641-2.222649901887053","key":"1"}),
    createElement('line', {"x1":"12.000000003161404","y1":"16.998782736171052","x2":"12.000000003161404","y2":"17.998782736171052","key":"2"}),
    createElement('line', {"x1":"7.000000003161404","y1":"16.998782736171052","x2":"7.000000003161404","y2":"17.998782736171052","key":"3"}),
    createElement('path', {"d":"M10.000000003161404,19.998782736171052c0,1.104569499661011.895430500331713,2,2,2h8c1.104569499661011,0,2-.895430500338989,2-2V3.998782736171052c0-1.104569499661011-.895430500338989-2-2-2h-8c-1.104569499668287,0-2,.895430500338989-2,2v2","key":"4"}),
    createElement('line', {"x1":"10.000000003161404","y1":"5.998782736171052","x2":"22.000000003161404","y2":"5.998782736171052","key":"5"}),
    createElement('line', {"x1":"16.000000003161404","y1":"17.998782736171052","x2":"22.000000003161404","y2":"17.998782736171052","key":"6"})
  );
});

MobileCart.displayName = 'MobileCart';

module.exports = MobileCart;
module.exports.MobileCart = MobileCart;
module.exports.default = MobileCart;
