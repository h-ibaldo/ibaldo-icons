'use strict';

const { createElement, forwardRef } = require('react');

const ShoppingBasket2 = forwardRef(function ShoppingBasket2(
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
    createElement('polygon', {"points":"19 21.999999999998181 5 21.999999999998181 4 14.999999999998181 2 13.999999999998181 2 9.999999999998181 22 9.999999999998181 22 13.999999999998181 20 14.999999999998181 19 21.999999999998181","key":"0"}),
    createElement('line', {"x1":"12","y1":"13.999999999998181","x2":"12","y2":"17.999999999998181","key":"1"}),
    createElement('line', {"x1":"8","y1":"13.999999999998181","x2":"8","y2":"17.999999999998181","key":"2"}),
    createElement('line', {"x1":"16","y1":"13.999999999998181","x2":"16","y2":"17.999999999998181","key":"3"}),
    createElement('path', {"d":"M4.279240779940665,6.999999999998181l.772075922010117-2.3162277660158c.136114046368675-.408342139111483.518252889978612-.6837722339842.948683298049218-.6837722339842h12c.430430408070606,0,.812569251680543.275430094872718.948683298049218.6837722339842l.772075922010117,2.3162277660158","key":"4"}),
    createElement('polyline', {"points":"9 3.999999999998181 9 2.999999999998181 15 2.999999999998181 15 3.999999999998181","key":"5"})
  );
});

ShoppingBasket2.displayName = 'ShoppingBasket2';

module.exports = ShoppingBasket2;
module.exports.ShoppingBasket2 = ShoppingBasket2;
module.exports.default = ShoppingBasket2;
