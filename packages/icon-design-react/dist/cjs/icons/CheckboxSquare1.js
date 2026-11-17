'use strict';

const { createElement, forwardRef } = require('react');

const CheckboxSquare1 = forwardRef(function CheckboxSquare1(
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
    createElement('polyline', {"points":"7.949462885140747 12.000000000480213 10.949462885140747 15.000000000480213 15.949462885140747 9.000000000480213","key":"0"}),
    createElement('rect', {"x":"1.949462885140747","y":"2.000000000480213","width":"20","height":"20","rx":"3","ry":"3","key":"1"})
  );
});

CheckboxSquare1.displayName = 'CheckboxSquare1';

module.exports = CheckboxSquare1;
module.exports.CheckboxSquare1 = CheckboxSquare1;
module.exports.default = CheckboxSquare1;
