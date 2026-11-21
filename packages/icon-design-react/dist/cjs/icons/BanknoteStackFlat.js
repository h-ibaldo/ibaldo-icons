'use strict';

const { createElement, forwardRef } = require('react');

const BanknoteStackFlat = forwardRef(function BanknoteStackFlat(
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
    createElement('path', {"d":"M2 16L22 16L22 2L2 2Z","key":"0"}),
    createElement('path', {"d":"M15 9C15 11.211 13.656 13 12 13C10.344 13 9 11.211 9 9C9 6.789 10.344 5 12 5C13.656 5 15 6.789 15 9Z","key":"1"}),
    createElement('path', {"d":"M18 2C18 4.211 19.789 6 22 6","key":"2"}),
    createElement('path', {"d":"M22 12C19.789 12 18 13.789 18 16","key":"3"}),
    createElement('path', {"d":"M6 16C6 13.789 4.211 12 2 12","key":"4"}),
    createElement('path', {"d":"M2 6C4.211 6 6 4.211 6 2","key":"5"}),
    createElement('path', {"d":"M3 19L21 19","key":"6"}),
    createElement('path', {"d":"M4 22L20 22","key":"7"})
  );
});

BanknoteStackFlat.displayName = 'BanknoteStackFlat';

module.exports = BanknoteStackFlat;
module.exports.BanknoteStackFlat = BanknoteStackFlat;
module.exports.default = BanknoteStackFlat;
