'use strict';

const { createElement, forwardRef } = require('react');

const BanknoteTen = forwardRef(function BanknoteTen(
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
    createElement('path', {"d":"M2 20L22 20L22 4L2 4Z","key":"0"}),
    createElement('path', {"d":"M17 20C17 17.238 19.238 15 22 15","key":"1"}),
    createElement('path', {"d":"M2 9C4.762 9 7 6.762 7 4","key":"2"}),
    createElement('path', {"d":"M15 12C15 14.211 13.656 16 12 16C10.344 16 9 14.211 9 12C9 9.789 10.344 8 12 8C13.656 8 15 9.789 15 12Z","key":"3"}),
    createElement('path', {"d":"M19 10L19 7L18 7","key":"4"}),
    createElement('path', {"d":"M6 17L6 14L5 14","key":"5"})
  );
});

BanknoteTen.displayName = 'BanknoteTen';

module.exports = BanknoteTen;
module.exports.BanknoteTen = BanknoteTen;
module.exports.default = BanknoteTen;
