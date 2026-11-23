'use strict';

const { createElement, forwardRef } = require('react');

const BanknoteDollarArrowRight = forwardRef(function BanknoteDollarArrowRight(
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
    createElement('path', {"d":"M22 13L22 3L2 3L2 19L11 19","key":"0"}),
    createElement('path', {"d":"M17 3C17 5.762 19.238 8 22 8","key":"1"}),
    createElement('path', {"d":"M2 14C4.762 14 7 16.238 7 19","key":"2"}),
    createElement('path', {"d":"M2 8C4.762 8 7 5.762 7 3","key":"3"}),
    createElement('path', {"d":"M14.586 8C14.063 7.406 13.105 7 12 7C10.344 7 9 7.895 9 9C9 10.105 10.344 11 12 11","key":"4"}),
    createElement('path', {"d":"M9.414 14C9.938 14.594 10.895 15 12 15C13.656 15 15 14.105 15 13C15 11.895 13.656 11 12 11","key":"5"}),
    createElement('path', {"d":"M12 6L12 7","key":"6"}),
    createElement('path', {"d":"M12 15L12 16","key":"7"}),
    createElement('path', {"d":"M15 19L22 19","key":"8"}),
    createElement('path', {"d":"M19 16L22 19L19 22","key":"9"})
  );
});

BanknoteDollarArrowRight.displayName = 'BanknoteDollarArrowRight';

module.exports = BanknoteDollarArrowRight;
module.exports.BanknoteDollarArrowRight = BanknoteDollarArrowRight;
module.exports.default = BanknoteDollarArrowRight;
