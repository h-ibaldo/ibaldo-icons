'use strict';

const { createElement, forwardRef } = require('react');

const CreditCardChip = forwardRef(function CreditCardChip(
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
    createElement('path', {"d":"M20 19L4 19C2.895 19 2 18.105 2 17L2 7C2 5.895 2.895 5 4 5L20 5C21.105 5 22 5.895 22 7L22 17C22 18.105 21.105 19 20 19Z","key":"0"}),
    createElement('path', {"d":"M8 15L6 15","key":"1"}),
    createElement('path', {"d":"M13 15L11 15","key":"2"}),
    createElement('path', {"d":"M18 15L16 15","key":"3"}),
    createElement('path', {"d":"M6 10L8 10L8 9L6 9Z","key":"4"})
  );
});

CreditCardChip.displayName = 'CreditCardChip';

module.exports = CreditCardChip;
module.exports.CreditCardChip = CreditCardChip;
module.exports.default = CreditCardChip;
