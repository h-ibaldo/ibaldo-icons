'use strict';

const { createElement, forwardRef } = require('react');

const FormCheckboxCheckLarge = forwardRef(function FormCheckboxCheckLarge(
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
    createElement('rect', {"x":"2.025268551144109","y":"5.998779324585485","width":"12.000000013759745","height":"11.999999973355443","rx":".999999999993439","ry":".999999999993439","key":"0"}),
    createElement('line', {"x1":"18.025268569828768","y1":"11.998779303612537","x2":"22.025268569828768","y2":"11.998779303612537","key":"1"}),
    createElement('polyline', {"points":"6.025268561499615 11.99877929957438 7.525268569828768 13.498779303612537 10.025268561488701 10.498779303612537","key":"2"})
  );
});

FormCheckboxCheckLarge.displayName = 'FormCheckboxCheckLarge';

module.exports = FormCheckboxCheckLarge;
module.exports.FormCheckboxCheckLarge = FormCheckboxCheckLarge;
module.exports.default = FormCheckboxCheckLarge;
