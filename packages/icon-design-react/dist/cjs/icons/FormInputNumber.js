'use strict';

const { createElement, forwardRef } = require('react');

const FormInputNumber = forwardRef(function FormInputNumber(
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
    createElement('rect', {"x":"2","y":"6","width":"20","height":"12.000000000003638","rx":"2","ry":"2","key":"0"}),
    createElement('polyline', {"points":"6 10 7 10 7 14","key":"1"}),
    createElement('line', {"x1":"11","y1":"13.989999999999782","x2":"11","y2":"14","key":"2"}),
    createElement('line', {"x1":"15","y1":"13.989999999999782","x2":"15","y2":"14","key":"3"})
  );
});

FormInputNumber.displayName = 'FormInputNumber';

module.exports = FormInputNumber;
module.exports.FormInputNumber = FormInputNumber;
module.exports.default = FormInputNumber;
