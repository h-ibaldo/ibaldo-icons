'use strict';

const { createElement, forwardRef } = require('react');

const FormCheckboxUnchecked3 = forwardRef(function FormCheckboxUnchecked3(
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
    createElement('rect', {"x":"1.999999995794496","y":"5.998779324585485","width":"12.000000013754288","height":"11.999999973355443","rx":".999999999999889","ry":".999999999999889","key":"0"}),
    createElement('line', {"x1":"18.000000014479156","y1":"11.998779303612537","x2":"22.000000014479156","y2":"11.998779303612537","key":"1"})
  );
});

FormCheckboxUnchecked3.displayName = 'FormCheckboxUnchecked3';

module.exports = FormCheckboxUnchecked3;
module.exports.FormCheckboxUnchecked3 = FormCheckboxUnchecked3;
module.exports.default = FormCheckboxUnchecked3;
