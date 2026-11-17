'use strict';

const { createElement, forwardRef } = require('react');

const FormInputText2 = forwardRef(function FormInputText2(
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
    createElement('path', {"d":"M22,18.999999999999091H4.160246899467893c-1.19307141844547,0-2.160246899467893-.967175481022423-2.160246899467893-2.160246899467893V7.160246899468802c0-1.19307141844547.967175481022423-2.160246899467893,2.160246899467893-2.160246899467893h17.839753100532107","key":"0"}),
    createElement('polyline', {"points":"5.999999999978172 10.000000000044565 5.999999999978172 9.000000000044565 7.999999999978172 9.000000000044565","key":"1"}),
    createElement('polyline', {"points":"12 10 11.999999999954525 9 9.999999999954525 9.00000000009004","key":"2"}),
    createElement('line', {"x1":"9.000000000001819","y1":"10","x2":"9.000000000001819","y2":"14","key":"3"}),
    createElement('line', {"x1":"10","y1":"15","x2":"11","y2":"15","key":"4"}),
    createElement('line', {"x1":"7","y1":"15","x2":"8","y2":"15","key":"5"}),
    createElement('line', {"x1":"15.000000000001819","y1":"15.000000000000909","x2":"15","y2":"14.990000000000691","key":"6"}),
    createElement('line', {"x1":"19","y1":"14.990000000000691","x2":"18.999999999998181","y2":"15.000000000000909","key":"7"})
  );
});

FormInputText2.displayName = 'FormInputText2';

module.exports = FormInputText2;
module.exports.FormInputText2 = FormInputText2;
module.exports.default = FormInputText2;
