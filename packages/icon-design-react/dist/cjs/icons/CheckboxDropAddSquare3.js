'use strict';

const { createElement, forwardRef } = require('react');

const CheckboxDropAddSquare3 = forwardRef(function CheckboxDropAddSquare3(
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
    createElement('polyline', {"points":"6.974731440090181 10.000000003874447 8.974731440090181 12.000000003874447 12.974731440090181 8.000000003874447","key":"0"}),
    createElement('rect', {"x":"2.974731440090181","y":"3.000000003874447","width":"14","height":"14","rx":"3","ry":"3","key":"1"}),
    createElement('path', {"d":"M20.974731440090181,8.000000003874447v10c0,1.656854249493335-1.343145750510303,3-3,3H7.974731440090181","key":"2"})
  );
});

CheckboxDropAddSquare3.displayName = 'CheckboxDropAddSquare3';

module.exports = CheckboxDropAddSquare3;
module.exports.CheckboxDropAddSquare3 = CheckboxDropAddSquare3;
module.exports.default = CheckboxDropAddSquare3;
