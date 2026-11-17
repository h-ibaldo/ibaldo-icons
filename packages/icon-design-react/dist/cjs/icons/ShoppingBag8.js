'use strict';

const { createElement, forwardRef } = require('react');

const ShoppingBag8 = forwardRef(function ShoppingBag8(
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
    createElement('path', {"d":"M18.648205036199215,21.000003996827218H5.351794963789871c-1.78803386366053,0-3.17910647700046-1.55419672654898-2.981651212099678-3.331294505500409l1.333333481479713-12.000003999997716c.168810859229779-1.519298070681543,1.453003530730712-2.668705494499591,2.981651212099678-2.668705494499591h10.629743109449919c1.52864768137988,0,2.812840352880812,1.149407423818047,2.981651212110592,2.668705494499591l1.333333481479713,12.000003999997716c.197455264889868,1.777097778951429-1.193617348450061,3.331294505500409-2.981651212110592,3.331294505500409Z","key":"0"}),
    createElement('path', {"d":"M16,8.000007996828572c0,2.209136790181219-1.790859209819246,3.999995999998646-3.999996000000465,3.999995999998646h-.00000799999907c-2.209136790190314,0-3.999996000000465-1.790859209817427-3.999996000000465-3.999995999998646","key":"1"})
  );
});

ShoppingBag8.displayName = 'ShoppingBag8';

module.exports = ShoppingBag8;
module.exports.ShoppingBag8 = ShoppingBag8;
module.exports.default = ShoppingBag8;
