'use strict';

const { createElement, forwardRef } = require('react');

const AtSign2Minus = forwardRef(function AtSign2Minus(
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
    createElement('circle', {"cx":"13.041899010609995","cy":"13.056394887040369","r":"4","key":"0"}),
    createElement('path', {"d":"M13.041899010609995,4.056394887444185c4.970581054689319-.000000000221917,9.00000000018008,4.029418944908684,9.000000000409273,8.999999999596184","key":"1"}),
    createElement('line', {"x1":"13.041899010609995","y1":"22.056394887040369","x2":"18.041899010609995","y2":"22.056394887040369","key":"2"}),
    createElement('line', {"x1":"8.041899011019268","y1":"3.056394887040369","x2":"2.041899010930138","y2":"3.056394887040369","key":"3"}),
    createElement('path', {"d":"M5.559477136019268,8.056394887040369c-.95751953125,1.4302978515625-1.517578125,3.1494140625-1.517578125,5,0,4.9705810546875,4.029296875,9,9,9","key":"4"}),
    createElement('path', {"d":"M22.067167566010539,13.056394882200038v1.500002499999027c0,1.38071049386599-1.119287006129525,2.499997500000973-2.499997500000973,2.499997500000973h-.000004999999874c-1.380710493858714,0-2.499997499999154-1.119287006134982-2.499997499999154-2.499997500000973v-1.500002499999027","key":"5"})
  );
});

AtSign2Minus.displayName = 'AtSign2Minus';

module.exports = AtSign2Minus;
module.exports.AtSign2Minus = AtSign2Minus;
module.exports.default = AtSign2Minus;
