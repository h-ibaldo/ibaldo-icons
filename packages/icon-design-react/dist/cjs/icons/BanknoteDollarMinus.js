'use strict';

const { createElement, forwardRef } = require('react');

const BanknoteDollarMinus = forwardRef(function BanknoteDollarMinus(
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
    createElement('path', {"d":"M22 16L22 4L2 4L2 20L12 20","key":"0"}),
    createElement('path', {"d":"M17 4C17 6.762 19.238 9 22 9","key":"1"}),
    createElement('path', {"d":"M2 15C4.762 15 7 17.238 7 20","key":"2"}),
    createElement('path', {"d":"M2 9C4.762 9 7 6.762 7 4","key":"3"}),
    createElement('path', {"d":"M14.586 9C14.063 8.406 13.105 8 12 8C10.344 8 9 8.895 9 10C9 11.105 10.344 12 12 12","key":"4"}),
    createElement('path', {"d":"M9.414 15C9.938 15.594 10.895 16 12 16C13.656 16 15 15.105 15 14C15 12.895 13.656 12 12 12","key":"5"}),
    createElement('path', {"d":"M12 7L12 8","key":"6"}),
    createElement('path', {"d":"M12 16L12 17","key":"7"}),
    createElement('path', {"d":"M16 20L22 20","key":"8"})
  );
});

BanknoteDollarMinus.displayName = 'BanknoteDollarMinus';

module.exports = BanknoteDollarMinus;
module.exports.BanknoteDollarMinus = BanknoteDollarMinus;
module.exports.default = BanknoteDollarMinus;
