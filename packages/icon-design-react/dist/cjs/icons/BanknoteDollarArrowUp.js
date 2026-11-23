'use strict';

const { createElement, forwardRef } = require('react');

const BanknoteDollarArrowUp = forwardRef(function BanknoteDollarArrowUp(
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
    createElement('path', {"d":"M22 13L22 2L2 2L2 18L13 18","key":"0"}),
    createElement('path', {"d":"M17 2C17 4.762 19.238 7 22 7","key":"1"}),
    createElement('path', {"d":"M2 13C4.762 13 7 15.238 7 18","key":"2"}),
    createElement('path', {"d":"M2 7C4.762 7 7 4.762 7 2","key":"3"}),
    createElement('path', {"d":"M14.586 7C14.063 6.406 13.105 6 12 6C10.344 6 9 6.895 9 8C9 9.105 10.344 10 12 10","key":"4"}),
    createElement('path', {"d":"M9.414 13C9.938 13.594 10.895 14 12 14C13.656 14 15 13.105 15 12C15 10.895 13.656 10 12 10","key":"5"}),
    createElement('path', {"d":"M12 5L12 6","key":"6"}),
    createElement('path', {"d":"M12 14L12 15","key":"7"}),
    createElement('path', {"d":"M19 22L19 15","key":"8"}),
    createElement('path', {"d":"M16 18L19 15L22 18","key":"9"})
  );
});

BanknoteDollarArrowUp.displayName = 'BanknoteDollarArrowUp';

module.exports = BanknoteDollarArrowUp;
module.exports.BanknoteDollarArrowUp = BanknoteDollarArrowUp;
module.exports.default = BanknoteDollarArrowUp;
